from django.db import models

# Create your models here.
class Invoice(models.Model):
    invoice_id = models.AutoField(primary_key=True)
    created_by_user = models.ForeignKey(
        "users.User", on_delete=models.CASCADE, blank=False
    )
    invoice_code = models.CharField(max_length=50, null=True, blank=True)
    issuer_email = models.CharField(max_length=255, null=True, blank=True)
    issuer_company_name = models.CharField(max_length=255, null=True, blank=True)
    issuer_address_street = models.CharField(max_length=255, null=True, blank=True)
    issuer_address_city = models.CharField(max_length=100, null=True, blank=True)
    issuer_address_country = models.CharField(max_length=100, null=True, blank=True)
    issuer_address_post_code = models.CharField(max_length=100, null=True, blank=True)
    issuer_vat_number = models.CharField(max_length=255, null=True, blank=True)
    issuer_tax_number = models.CharField(max_length=255, null=True, blank=True)

    billed_email = models.CharField(max_length=255, null=True, blank=True)
    billed_company_name = models.CharField(max_length=255, null=True, blank=True)
    billed_address_street = models.CharField(max_length=255, null=True, blank=True)
    billed_address_city = models.CharField(max_length=100, null=True, blank=True)
    billed_address_country = models.CharField(max_length=100, null=True, blank=True)
    billed_address_post_code = models.CharField(max_length=100, null=True, blank=True)
    billed_vat_number = models.CharField(max_length=255, null=True, blank=True)
    billed_tax_number = models.CharField(max_length=255, null=True, blank=True)

    service_date_from = models.DateField(blank=True)
    service_date_to = models.DateField(blank=True)
    due_date = models.DateField(blank=True)

    currency = models.ForeignKey(
        "currencies.FiatCurrency", on_delete=models.CASCADE, blank=False
    )
    status = models.ForeignKey(
        "invoices.InvoiceStatusTypes", on_delete=models.CASCADE, blank=False
    )
    product_type = models.ForeignKey(
        "invoices.InvoiceProductTypes", on_delete=models.CASCADE, blank=False
    )
    items = models.ManyToManyField("invoices.InvoiceItems", blank=True)
    vat_rate = models.FloatField(blank=True)
    total = models.FloatField(blank=True, default=0)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


class InvoiceStatusTypes(models.Model):
    name = models.CharField(max_length=100, primary_key=True, blank=False)


class InvoiceProductTypes(models.Model):
    name = models.CharField(max_length=100, primary_key=True, blank=False)


class InvoiceItems(models.Model):
    invoice_id = models.ForeignKey(
        Invoice,
        on_delete=models.CASCADE,
        related_name="items_invoice_id",
    )
    description = models.TextField(blank=False)
    quantity = models.FloatField(blank=False, default=0)
    price = models.FloatField(blank=False, default=0)
    item_total = models.FloatField(blank=False, default=0)
