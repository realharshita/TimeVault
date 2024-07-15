from django.contrib.auth.models import AbstractUser

class UserProfile(AbstractUser):
    # Add unique related_name for groups and user_permissions
    groups = models.ManyToManyField(Group, related_name='user_profiles')
    user_permissions = models.ManyToManyField(Permission, related_name='user_profiles')
