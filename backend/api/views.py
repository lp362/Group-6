from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.response import Response
from django.contrib.auth.models import User
from .models import Course, Cart, ContactFormSubmission
from .serializers import CourseSerializer, CartItemSerializer, ContactFormSerializer, UserSerializer
from django.http import JsonResponse

def root_view(request):
    return JsonResponse({"message": "Welcome to the E-commerce API!"})


class CourseViewSet(viewsets.ModelViewSet):
    queryset = Course.objects.all()
    serializer_class = CourseSerializer

    @action(detail=True, methods=['get'])
    def fetch_details(self, request, pk=None):
        course = self.get_object()
        serializer = self.get_serializer(course)
        return Response(serializer.data)

class CartViewSet(viewsets.ViewSet):
    def list(self, request):
        user = request.user
        cart, _ = Cart.objects.get_or_create(user=user)
        serializer = CartItemSerializer(cart)
        return Response(serializer.data)

    def create(self, request):
        user = request.user
        cart, _ = Cart.objects.get_or_create(user=user)
        course_id = request.data.get('id')
        try:
            course = Course.objects.get(id=course_id)
            cart.courses.add(course)
            cart.save()
            return Response({'message': 'Course added to cart.'}, status=status.HTTP_201_CREATED)
        except Course.DoesNotExist:
            return Response({'error': 'Course not found.'}, status=status.HTTP_404_NOT_FOUND)

    def destroy(self, request, pk=None):
        user = request.user
        cart, _ = Cart.objects.get_or_create(user=user)
        try:
            course = cart.courses.get(id=pk)
            cart.courses.remove(course)
            cart.save()
            return Response({'message': 'Course removed from cart.'}, status=status.HTTP_204_NO_CONTENT)
        except Course.DoesNotExist:
            return Response({'error': 'Course not found in cart.'}, status=status.HTTP_404_NOT_FOUND)

    @action(detail=False, methods=['post'])
    def confirm(self, request):
        user = request.user
        cart, _ = Cart.objects.get_or_create(user=user)
        cart.courses.clear()
        cart.save()
        return Response({'message': 'Enrollment confirmed.'})

class ContactFormViewSet(viewsets.ModelViewSet):
    queryset = ContactFormSubmission.objects.all()
    serializer_class = ContactFormSerializer

class UserViewSet(viewsets.ViewSet):
    def create(self, request):
        username = request.data.get('name')
        email = request.data.get('email')
        password = request.data.get('password')
        user = User.objects.create_user(username=username, email=email, password=password)
        serializer = UserSerializer(user)
        return Response(serializer.data)

    def login(self, request):
        email = request.data.get('email')
        password = request.data.get('password')
        try:
            user = User.objects.get(email=email)
            if user.check_password(password):
                serializer = UserSerializer(user)
                return Response(serializer.data)
            return Response({'error': 'Invalid password.'}, status=status.HTTP_400_BAD_REQUEST)
        except User.DoesNotExist:
            return Response({'error': 'User not found.'}, status=status.HTTP_404_NOT_FOUND)
