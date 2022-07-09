from django.db import models


class User(models.Model):
    email = models.CharField(max_length=255, primary_key=True, unique=True)
    full_name = models.CharField(max_length=255, blank=False)
    profession = models.CharField(max_length=255, blank=True)
    created_at = models.DateTimeField()

    def __repr__(self):
        return f"Created user {self.email}"


class UserCompany(models.Model):
    user_company_id = models.AutoField(primary_key=True)
    company_name = models.CharField(max_length=255, null=True, blank=True)
    url = models.CharField(max_length=255, null=True, blank=True)
    user = models.ForeignKey("users.User", on_delete=models.CASCADE, blank=False)
    address_street = models.CharField(max_length=255, null=True, blank=True)
    address_city = models.CharField(max_length=100, null=True, blank=True)
    address_country = models.CharField(max_length=100, null=True, blank=True)
    address_post_code = models.CharField(max_length=100, null=True, blank=True)
    vat_number = models.CharField(max_length=255, null=True, blank=True)
    tax_number = models.CharField(max_length=255, null=True, blank=True)
