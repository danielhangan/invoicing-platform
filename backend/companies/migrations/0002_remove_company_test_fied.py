# Generated by Django 4.0.4 on 2022-06-08 10:07

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('companies', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='company',
            name='test_fied',
        ),
    ]