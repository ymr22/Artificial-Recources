# Generated by Django 5.0.3 on 2024-03-15 23:06

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('utils', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='offdayrequest',
            name='previous_off_days',
        ),
    ]