from django.db import models


class Company(models.Model):
    name = models.CharField(max_length=20)
    address = models.CharField(max_length=200)
    city = models.CharField(max_length=10, null=True)
    state = models.CharField(max_length=10, null=True)
    zipcode = models.CharField(max_length=10, null=True)
    phone = models.CharField(max_length=10, null=True)
    email = models.EmailField(),

    def __str__(self):
        return self.name

