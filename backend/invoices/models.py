from django.db import models

# Create your models here.
class Invoice(models.Model):
    user = models.ForeignKey("users.User", on_delete=models.CASCADE, blank=False)
    issuer = models.ForeignKey(
        "companies.Company",
        related_name="issued_invoices",
        on_delete=models.CASCADE,
        blank=False,
    )
    billed_to = models.ForeignKey(
        "companies.Company",
        related_name="billed_to_invoices",
        on_delete=models.CASCADE,
        blank=False,
    )
    service_date_from = models.DateField(blank=True)
    service_date_to = models.DateField(blank=True)
    due_date = models.DateField(blank=True)
    number = models.IntegerField(blank=False)
    language = models.CharField(max_length=100, blank=False)
    currency = models.ForeignKey(
        "currencies.FiatCurrency", on_delete=models.CASCADE, blank=False
    )
    status = models.ForeignKey(
        "invoices.InvoiceStatus", on_delete=models.CASCADE, blank=False
    )
    product_type = models.ForeignKey(
        "invoices.InvoiceProductTypes", on_delete=models.CASCADE, blank=False
    )
    items = models.ManyToManyField("invoices.InvoiceItems", blank=True)
    vat_rate = models.FloatField(blank=True)
    total = models.FloatField(blank=True, default=0)

    created_at = models.DateTimeField()
    updtate_at = models.DateTimeField(auto_now=True)


class InvoiceStatus(models.Model):
    name = models.CharField(max_length=100, primary_key=True, blank=False)


class InvoiceProductTypes(models.Model):
    name = models.CharField(max_length=100, primary_key=True, blank=False)


class InvoiceItems(models.Model):
    description = models.TextField(blank=False)
    quantity = models.FloatField(blank=False, default=0)
    price = models.FloatField(blank=False, default=0)
    total = models.FloatField(blank=False, default=0)
