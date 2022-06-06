# Generated by Django 4.0.4 on 2022-06-05 10:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='user',
            name='first_name',
        ),
        migrations.RemoveField(
            model_name='user',
            name='password',
        ),
        migrations.RemoveField(
            model_name='user',
            name='second_name',
        ),
        migrations.AddField(
            model_name='user',
            name='full_name',
            field=models.CharField(default='test name', max_length=255),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='user',
            name='profession',
            field=models.CharField(blank=True, max_length=255),
        ),
    ]