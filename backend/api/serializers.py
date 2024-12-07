from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Course, Cart, ContactFormSubmission, UserProfile

class UserSerializer(serializers.ModelSerializer):
    """Serializer for User model."""
    class Meta:
        model = User
        fields = ['id', 'username', 'email']

class UserProfileSerializer(serializers.ModelSerializer):
    """Serializer for UserProfile model."""
    user = UserSerializer(read_only=True)  # Nested user serializer
    enrolled_courses = serializers.PrimaryKeyRelatedField(
        many=True, queryset=Course.objects.all()
    )  # Allow updating enrolled courses by ID

    class Meta:
        model = UserProfile
        fields = ['user', 'enrolled_courses']

class CourseSerializer(serializers.ModelSerializer):
    """Serializer for Course model."""
    class Meta:
        model = Course
        fields = ['id', 'name', 'image', 'concept', 'concept_elaborate', 'tutor', 'duration']

class CartSerializer(serializers.ModelSerializer):
    """Serializer for Cart model."""
    user = serializers.ReadOnlyField(source='user.username')  # Display username for readability
    courses = CourseSerializer(many=True, read_only=True)  # Nested course details in cart

    class Meta:
        model = Cart
        fields = ['user', 'courses']

class ContactFormSerializer(serializers.ModelSerializer):
    """Serializer for ContactFormSubmission model."""
    class Meta:
        model = ContactFormSubmission
        fields = ['id', 'name', 'email', 'message', 'submitted_at']
