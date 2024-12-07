from django.contrib import admin
from .models import UserProfile, Course, Cart, ContactFormSubmission

@admin.register(UserProfile)
class UserProfileAdmin(admin.ModelAdmin):
    """Admin configuration for UserProfile."""
    list_display = ('user',)
    search_fields = ('user__username', 'user__email')
    filter_horizontal = ('enrolled_courses',)  # Adds a widget for selecting multiple courses

@admin.register(Course)
class CourseAdmin(admin.ModelAdmin):
    """Admin configuration for Course."""
    list_display = ('name', 'tutor', 'duration')
    search_fields = ('name', 'tutor')
    list_filter = ('tutor',)

@admin.register(Cart)
class CartAdmin(admin.ModelAdmin):
    """Admin configuration for Cart."""
    list_display = ('user',)
    search_fields = ('user__username', 'user__email')
    filter_horizontal = ('courses',)  # Adds a widget for selecting multiple courses

@admin.register(ContactFormSubmission)
class ContactFormSubmissionAdmin(admin.ModelAdmin):
    """Admin configuration for ContactFormSubmission."""
    list_display = ('name', 'email', 'submitted_at')
    search_fields = ('name', 'email')
    list_filter = ('submitted_at',)
