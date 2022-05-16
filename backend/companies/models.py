from pickle import FALSE
from django.db import models

# Create your models here.
class Company(models.Model):
    name = models.CharField(max_length=255, primary_key=True, blank=False)
    url = models.CharField(max_length=255, blank=False)
    user = models.ForeignKey("users.User", on_delete=models.CASCADE, blank=False)
    address_street = models.CharField(max_length=255, blank=False)
    address_city = models.CharField(max_length=100, blank=False)
    address_country = models.CharField(max_length=100, blank=False)
    address_post_code = models.CharField(max_length=100, blank=False)
