from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import CourseViewSet, CartViewSet, ContactFormViewSet, UserViewSet

router = DefaultRouter()
router.register(r'courses', CourseViewSet, basename='courses')
router.register(r'cart', CartViewSet, basename='cart')
router.register(r'contact', ContactFormViewSet, basename='contact')
router.register(r'users', UserViewSet, basename='users')

urlpatterns = [
    path('', include(router.urls)),
]
