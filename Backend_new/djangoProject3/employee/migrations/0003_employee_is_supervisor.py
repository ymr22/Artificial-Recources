# Generated by Django 5.0.3 on 2024-04-09 13:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("employee", "0002_alter_employee_phone"),
    ]

    operations = [
        migrations.AddField(
            model_name="employee",
            name="is_supervisor",
            field=models.BooleanField(default=False),
        ),
    ]
