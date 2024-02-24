from django.db import models


class Employee(models.Model):
    name = models.CharField(max_length=20)
    age = models.IntegerField()
    salary = models.IntegerField()
    email = models.EmailField()

    def __str__(self):
        return self.name

