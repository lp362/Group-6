from django.db import models
from django.contrib.auth.models import User
from django.db.models.signals import post_save
from django.dispatch import receiver


class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name="profile")
    enrolled_courses = models.ManyToManyField('Course', blank=True, related_name="enrolled_users")

    def __str__(self):
        return self.user.username


@receiver(post_save, sender=User)
def create_user_profile(sender, instance, created, **kwargs):
    """Automatically create a UserProfile whenever a new User is created."""
    if created:
        UserProfile.objects.create(user=instance)


class Course(models.Model):
    name = models.CharField(max_length=200)
    image = models.ImageField(upload_to="course_images/", blank=True, null=True)  # ImageField for file uploads
    concept = models.TextField()
    concept_elaborate = models.TextField()
    tutor = models.CharField(max_length=100)
    duration = models.CharField(max_length=50, blank=True, null=True)

    def __str__(self):
        return self.name


class Cart(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name="cart")
    courses = models.ManyToManyField(Course, blank=True, related_name="in_carts")

    def __str__(self):
        return f"Cart of {self.user.username}"

    def add_course(self, course):
        """Add a course to the cart."""
        self.courses.add(course)

    def remove_course(self, course):
        """Remove a course from the cart."""
        self.courses.remove(course)

    def clear_cart(self):
        """Clear all courses from the cart."""
        self.courses.clear()


class ContactFormSubmission(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    message = models.TextField()
    submitted_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Message from {self.name}"
