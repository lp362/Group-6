from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.filters import SearchFilter
from django.contrib.auth.models import User
from .models import Course, Cart, ContactFormSubmission, UserProfile
from .serializers import CourseSerializer, CartSerializer, ContactFormSerializer, UserSerializer
from django.http import JsonResponse
from rest_framework.exceptions import NotFound

def root_view(request):
    """Root endpoint to provide API information."""
    return JsonResponse({"message": "Welcome to the E-commerce API!"})

class CourseViewSet(viewsets.ModelViewSet):
    """ViewSet to manage courses."""
    queryset = Course.objects.all()
    serializer_class = CourseSerializer
    filter_backends = [SearchFilter]
    search_fields = ['name', 'tutor']  # Enable search by name or tutor

    @action(detail=True, methods=['get'])
    def fetch_details(self, request, pk=None):
        """Fetch detailed information about a specific course."""
        try:
            course = self.get_object()
            serializer = self.get_serializer(course)
            return Response(serializer.data, status=status.HTTP_200_OK)
        except Course.DoesNotExist:
            return Response({'error': 'Course not found.'}, status=status.HTTP_404_NOT_FOUND)

class CartViewSet(viewsets.ViewSet):
    """ViewSet to manage cart operations."""
    
    def list(self, request):
        """Fetch all items in the user's cart."""
        if not request.user.is_authenticated:
            return Response({'error': 'Authentication required.'}, status=status.HTTP_401_UNAUTHORIZED)
        cart, _ = Cart.objects.get_or_create(user=request.user)
        serializer = CartSerializer(cart)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def create(self, request):
        """Add a course to the user's cart."""
        if not request.user.is_authenticated:
            return Response({'error': 'Authentication required.'}, status=status.HTTP_401_UNAUTHORIZED)
        cart, _ = Cart.objects.get_or_create(user=request.user)
        course_id = request.data.get('id')
        if not course_id:
            return Response({'error': 'Course ID is required.'}, status=status.HTTP_400_BAD_REQUEST)
        try:
            course = Course.objects.get(id=course_id)
            if cart.courses.filter(id=course.id).exists():
                return Response({'message': 'Course already in cart.'}, status=status.HTTP_400_BAD_REQUEST)
            cart.courses.add(course)
            cart.save()
            return Response({'message': 'Course added to cart.'}, status=status.HTTP_201_CREATED)
        except Course.DoesNotExist:
            return Response({'error': 'Course not found.'}, status=status.HTTP_404_NOT_FOUND)

    def destroy(self, request, pk=None):
        """Remove a course from the user's cart."""
        if not request.user.is_authenticated:
            return Response({'error': 'Authentication required.'}, status=status.HTTP_401_UNAUTHORIZED)
        cart, _ = Cart.objects.get_or_create(user=request.user)
        try:
            course = cart.courses.get(id=pk)
            cart.courses.remove(course)
            return Response({'message': 'Course removed from cart.'}, status=status.HTTP_204_NO_CONTENT)
        except Course.DoesNotExist:
            return Response({'error': 'Course not found in cart.'}, status=status.HTTP_404_NOT_FOUND)

    @action(detail=False, methods=['post'])
    def confirm(self, request):
        """Confirm enrollment for all courses in the user's cart."""
        if not request.user.is_authenticated:
            return Response({'error': 'Authentication required.'}, status=status.HTTP_401_UNAUTHORIZED)
        cart, _ = Cart.objects.get_or_create(user=request.user)
        if not cart.courses.exists():
            return Response({'error': 'No courses in cart.'}, status=status.HTTP_400_BAD_REQUEST)
        user_profile = request.user.profile
        user_profile.enrolled_courses.add(*cart.courses.all())  # Bulk enrollment
        cart.courses.clear()  # Clear cart after enrollment
        cart.save()
        return Response({'message': 'Enrollment confirmed.'}, status=status.HTTP_200_OK)

class ContactFormViewSet(viewsets.ModelViewSet):
    """ViewSet to handle contact form submissions."""
    queryset = ContactFormSubmission.objects.all()
    serializer_class = ContactFormSerializer

class UserViewSet(viewsets.ViewSet):
    """ViewSet to manage user registration and login."""

    def create(self, request):
        """Register a new user."""
        username = request.data.get('username')
        email = request.data.get('email')
        password = request.data.get('password')
        if User.objects.filter(email=email).exists():
            return Response({'error': 'Email already in use.'}, status=status.HTTP_400_BAD_REQUEST)
        if User.objects.filter(username=username).exists():
            return Response({'error': 'Username already in use.'}, status=status.HTTP_400_BAD_REQUEST)
        user = User.objects.create_user(username=username, email=email, password=password)
        UserProfile.objects.create(user=user)  # Create user profile
        serializer = UserSerializer(user)
        return Response(serializer.data, status=status.HTTP_201_CREATED)

    @action(detail=False, methods=['post'])
    def login(self, request):
        """Login an existing user."""
        email = request.data.get('email')
        password = request.data.get('password')
        try:
            user = User.objects.get(email=email)
            if user.check_password(password):
                serializer = UserSerializer(user)
                return Response(serializer.data, status=status.HTTP_200_OK)
            return Response({'error': 'Invalid password.'}, status=status.HTTP_400_BAD_REQUEST)
        except User.DoesNotExist:
            return Response({'error': 'User not found.'}, status=status.HTTP_404_NOT_FOUND)
