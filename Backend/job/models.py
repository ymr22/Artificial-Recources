from django.db import models
from company.models import Company
from employee.models import Employee


class Job(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    date = models.DateField()
    location = models.CharField(max_length=100)
    company = models.ManyToManyField(Company)
    employee = models.ManyToManyField(Employee)

    def __str__(self):
        return self.title

