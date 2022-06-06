# Generated by Django 4.0.4 on 2022-06-05 10:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('companies', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='CompanyTypes',
            fields=[
                ('company_type_name', models.CharField(max_length=255, primary_key=True, serialize=False)),
            ],
        ),
        migrations.RemoveField(
            model_name='company',
            name='name',
        ),
        migrations.AddField(
            model_name='company',
            name='company_id',
            field=models.IntegerField(default=123, primary_key=True, serialize=False),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='company',
            name='company_name',
            field=models.CharField(blank=True, max_length=255),
        ),
        migrations.AddField(
            model_name='company',
            name='founded_on',
            field=models.DateField(null=True),
        ),
        migrations.AddField(
            model_name='company',
            name='tax_number',
            field=models.CharField(default='asdjkh123', max_length=255),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='company',
            name='vat_number',
            field=models.CharField(blank=True, max_length=255),
        ),
    ]
