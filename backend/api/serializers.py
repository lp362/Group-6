from rest_framework import serializers
from .models import Course, Cart, ContactFormSubmission
from django.contrib.auth.models import User

class CourseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Course
        fields = ['id', 'name', 'image', 'concept', 'concept_elaborate', 'tutor']

class CartItemSerializer(serializers.ModelSerializer):
    courses = CourseSerializer(many=True)

    class Meta:
        model = Cart
        fields = ['id', 'courses']

class ContactFormSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactFormSubmission
        fields = ['name', 'email', 'message', 'submitted_at']

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email']
