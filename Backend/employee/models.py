from django.db import models
from django.db.models import OneToOneField

from user.models import Profile
from utils.models import CV


class Employee(models.Model):
    GENDER_CHOICES = [("female", "Female"), ("male", "Male")]
    EDUCATION_LEVELS = [("primary school graduate", "Primary School Graduate"),
                        ("secondary school graduate", "Secondary School Graduate"),
                        ("high school graduate", "High School Graduate"),
                        ("bachelors degree", "Bachelors Degree"),
                        ("masters degree", "Masters Degree"), ("phd", "Phd")]

    user = OneToOneField(Profile, on_delete=models.CASCADE, null=True, blank=True)
    employee_id = models.AutoField(primary_key=True, unique=True, editable=False, null=False, auto_created=True)
    first_name = models.CharField(max_length=20)
    middle_name = models.CharField(max_length=20, blank=True, null=True)
    surname = models.CharField(max_length=40)
    age = models.IntegerField(null=True, blank=True)
    salary = models.IntegerField(null=True, blank=True)
    email = models.CharField(max_length=100, null=True, blank=True)
    gender = models.CharField(choices=GENDER_CHOICES, null=True, blank=True)
    birth_date = models.DateField(null=True, blank=True)
    date_of_employment = models.DateField(null=True, blank=True)
    address = models.CharField(max_length=250, null=True, blank=True)
    photo = models.ImageField(null=True, blank=True, upload_to='uploads')
    cv = models.OneToOneField(CV, on_delete=models.PROTECT, null=True, blank=True)
    education = models.CharField(blank=True, null=True, choices=EDUCATION_LEVELS)
    university = models.CharField(max_length=100, blank=True, null=True)
    position = models.CharField(max_length=100, blank=True, null=True)
