# Generated by Django 5.0.3 on 2024-03-15 22:37

import django.db.models.deletion
import django.utils.timezone
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('employee', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='CV',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('content', models.TextField(max_length=500)),
                ('is_deleted', models.BooleanField(default=False)),
                ('belongs_to', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='employee.employee')),
            ],
        ),
        migrations.CreateModel(
            name='Message',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('timestamp', models.DateTimeField(default=django.utils.timezone.now)),
                ('content', models.TextField(max_length=200, null=True)),
                ('is_deleted', models.BooleanField(default=False)),
                ('from_user', models.OneToOneField(on_delete=django.db.models.deletion.DO_NOTHING, related_name='from_user', to='employee.employee')),
                ('to_user', models.ManyToManyField(related_name='to_users', to='employee.employee')),
            ],
        ),
        migrations.CreateModel(
            name='OffDayRequest',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('timestamp', models.DateTimeField(default=django.utils.timezone.now)),
                ('reason', models.CharField(max_length=50)),
                ('duration', models.IntegerField()),
                ('previous_off_days', models.IntegerField()),
                ('allowed_off_days', models.IntegerField(default=30, editable=False)),
                ('seen', models.BooleanField(default=False)),
                ('approved', models.BooleanField(default=False)),
                ('timeout', models.BooleanField(default=False)),
                ('requested_by', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='employee.employee')),
            ],
            options={
                'ordering': ['-timestamp'],
            },
        ),
    ]