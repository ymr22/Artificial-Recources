from django.db import models


class CV(models.Model):
    file = models.FileField(upload_to='uploads')

