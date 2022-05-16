from django.db import models


class FiatCurrency(models.Model):
    name = models.CharField(max_length=255, primary_key=True, blank=False)
    code = models.CharField(max_length=30, blank=False)
    symbol = models.CharField(max_length=255, blank=True)
    country = models.CharField(max_length=50, blank=True)
