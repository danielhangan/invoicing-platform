from pickle import FALSE
from django.db import models

# Create your models here.
class Company(models.Model):
    company_id = models.IntegerField(primary_key=True, null=False)
    company_name = models.CharField(max_length=255, blank=True)
    url = models.CharField(max_length=255, blank=False)
    user = models.ForeignKey("users.User", on_delete=models.CASCADE, blank=False)
    address_street = models.CharField(max_length=255, blank=False)
    address_city = models.CharField(max_length=100, blank=False)
    address_country = models.CharField(max_length=100, blank=False)
    address_post_code = models.CharField(max_length=100, blank=False)
    vat_number = models.CharField(max_length=255, blank=True)
    tax_number = models.CharField(max_length=255, blank=False)
    founded_on = models.DateField(null=True)


class UserCompany(models.Model):
    user_id = models.ForeignKey("users.User", on_delete=models.CASCADE, blank=False)
    company_id = models.ForeignKey(
        "companies.Company", on_delete=models.CASCADE, blank=False
    )


class CompanyTypes(models.Model):
    company_type_name = models.CharField(max_length=255, primary_key=True, blank=False)
