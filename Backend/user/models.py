from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone


class Profile(models.Model):
    created_date = models.DateTimeField(auto_now_add=True)
    last_updated = models.DateTimeField(default=timezone.now)
    created_by = models.ForeignKey(User, on_delete=models.DO_NOTHING, related_name='%(class)s', null=True, blank=True)
    is_deleted = models.BooleanField(default=False)
    user = models.OneToOneField(User, on_delete=models.DO_NOTHING, related_name='user_profiles', null=True, blank=True)
