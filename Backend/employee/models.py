from django.db import models
from utils.models import CV


class Employee(models.Model):
    GENDER_CHOICES = [("female", "Female"), ("male", "Male")]
    EDUCATION_LEVELS = [("primary school graduate", "Primary School Graduate"),
                        ("secondary school graduate", "Secondary School Graduate"),
                        ("high school graduate", "High School Graduate"),
                        ("bachelors degree", "Bachelors Degree"),
                        ("masters degree", "Masters Degree"), ("phd", "Phd")]

    employee_id = models.AutoField(primary_key=True, unique=True, editable=False, null=False, auto_created=True)
    first_name = models.CharField(max_length=20)
    middle_name = models.CharField(max_length=20, blank=True, null=True)
    surname = models.CharField(max_length=40)
    age = models.IntegerField()
    salary = models.IntegerField()
    email = models.EmailField()
    gender = models.CharField(max_length=6, choices=GENDER_CHOICES)
    birth_date = models.DateField()
    date_of_employment = models.DateField()
    address = models.CharField(max_length=250)
    photo = models.ImageField()
    cv = models.OneToOneField(CV, on_delete=models.PROTECT)
    education = models.CharField(max_length=100, blank=True, null=True, choices=EDUCATION_LEVELS)
    university = models.CharField(max_length=100, blank=True, null=True)
    position = models.CharField(max_length=100, blank=True, null=True)

    class Meta:
        ordering = ["employee_id", "surname", "first_name"]

    def __str__(self):
        return self.first_name, self.surname

