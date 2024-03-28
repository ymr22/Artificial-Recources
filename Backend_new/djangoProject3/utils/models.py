from django.contrib.postgres.fields import ArrayField
from django.db import models
from django.utils import timezone
from employee.models import Employee


class Message(models.Model):
    timestamp = models.DateTimeField(default=timezone.now)
    content = models.TextField(max_length=200, null=True)
    from_user = models.OneToOneField(Employee, on_delete=models.DO_NOTHING, related_name='from_user')
    to_user = models.ManyToManyField(Employee, related_name='to_users')
    is_deleted = models.BooleanField(default=False)


class CVInfo(models.Model):
    name = models.CharField(max_length=100)
    surname = models.CharField(max_length=100)
    email = models.EmailField(max_length=100)
    telephone = models.CharField(max_length=15, null=True, blank=True)
    birth_date = models.DateField(null=True, blank=True)
    previous_jobs = ArrayField(models.CharField(max_length=100, null=True, blank=True))
    education = ArrayField(models.CharField(max_length=100, null=True, blank=True))
    experience = ArrayField(models.CharField(max_length=100, null=True, blank=True))
    skills = ArrayField(models.CharField(max_length=100, null=True, blank=True))
    projects = ArrayField(models.CharField(max_length=100, null=True, blank=True))
    interests = ArrayField(models.CharField(max_length=100, null=True, blank=True))
    is_deleted = models.BooleanField(default=False, null=True, blank=True)


class OffDayRequest(models.Model):
    timestamp = models.DateTimeField(default=timezone.now)
    reason = models.CharField(max_length=50)
    duration = models.IntegerField()
    allowed_off_days = models.IntegerField(default=30, editable=False)
    requested_by = models.ForeignKey(Employee, on_delete=models.DO_NOTHING)
    seen = models.BooleanField(default=False)
    approved = models.BooleanField(default=False)
    timeout = models.BooleanField(default=False)

    class Meta:
        ordering = ['-timestamp']

    # def save(self, *args, **kwargs):
    #     if self.requested_by == 'Manager':
    #         self.off_days = 20
    #     super().save(*args, **kwargs)
