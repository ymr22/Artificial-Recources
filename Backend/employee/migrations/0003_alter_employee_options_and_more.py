# Generated by Django 5.0.1 on 2024-02-18 16:33

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('employee', '0002_employee_age_employee_email_employee_name_and_more'),
        ('utils', '0001_initial'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='employee',
            options={'ordering': ['employee_id', 'surname', 'first_name']},
        ),
        migrations.RenameField(
            model_name='employee',
            old_name='name',
            new_name='first_name',
        ),
        migrations.RemoveField(
            model_name='employee',
            name='id',
        ),
        migrations.AddField(
            model_name='employee',
            name='address',
            field=models.CharField(default=None, max_length=250),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='employee',
            name='birth_date',
            field=models.DateField(default=None),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='employee',
            name='cv',
            field=models.OneToOneField(default=None, on_delete=django.db.models.deletion.PROTECT, to='utils.cv'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='employee',
            name='date_of_employment',
            field=models.DateField(default=None),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='employee',
            name='education',
            field=models.CharField(blank=True, choices=[('primary school graduate', 'Primary School Graduate'), ('secondary school graduate', 'Secondary School Graduate'), ('high school graduate', 'High School Graduate'), ('bachelors degree', 'Bachelors Degree'), ('masters degree', 'Masters Degree'), ('phd', 'Phd')], max_length=100, null=True),
        ),
        migrations.AddField(
            model_name='employee',
            name='employee_id',
            field=models.AutoField(auto_created=True, default=None, editable=False, primary_key=True, serialize=False, unique=True),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='employee',
            name='gender',
            field=models.CharField(choices=[('female', 'Female'), ('male', 'Male')], default=None, max_length=6),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='employee',
            name='middle_name',
            field=models.CharField(blank=True, max_length=20, null=True),
        ),
        migrations.AddField(
            model_name='employee',
            name='photo',
            field=models.ImageField(default=None, upload_to=''),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='employee',
            name='position',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
        migrations.AddField(
            model_name='employee',
            name='surname',
            field=models.CharField(default=None, max_length=40),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='employee',
            name='university',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
    ]
