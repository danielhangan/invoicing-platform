from ninja import Router
from ninja.errors import HttpError
from typing import List, Optional
from users.api import AuthBearer

from invoices import models, schemas
from users.models import User
from currencies.models import FiatCurrency
from companies.models import Company


router = Router(tags=["invoices"])


@router.post("/", auth=AuthBearer())
def create_invoice(request, payload: schemas.CreateInvoice):
    user = User.objects.filter(email=payload.user).first()
    if not user:
        raise HttpError(
            status_code=400, message=f"User with email {payload.user} doesn't exist!"
        )

    company_issuer = Company.objects.filter(name=payload.issuer.lower()).first()
    if not company_issuer:
        raise HttpError(
            status_code=400,
            message=f"Company of name {payload.issuer.lower()} doesn't exist!",
        )

    company_billed_to = Company.objects.filter(name=payload.billed_to.lower()).first()
    if not company_billed_to:
        raise HttpError(
            status_code=400,
            message=f"Company of name {payload.billed_to.lower()} doesn't exist!",
        )

    if company_issuer == company_billed_to:
        raise HttpError(
            status_code=400, message="You cannot send invoice to your own company!"
        )

    invoice_currency = FiatCurrency.objects.filter(code=payload.currency).first()
    if not invoice_currency:
        raise HttpError(
            status_code=400,
            message=f"Fiat Currency of code {payload.currency} doesn't exist!",
        )

    invoice_status = models.InvoiceStatus.objects.filter(name=payload.status).first()
    if not invoice_status:
        raise HttpError(
            status_code=400,
            message=f"Invoice Status of type {payload.status.lower()} doesn't exist!",
        )

    invoice_product_type = models.InvoiceProductTypes.objects.filter(
        name=payload.product_type
    ).first()
    if not invoice_product_type:
        raise HttpError(
            status_code=400,
            message=f"Invoice product type {payload.product_type.lower()} doesn't exist!",
        )

    new_invoice = models.Invoice.objects.create(
        user=user,
        issuer=company_issuer,
        billed_to=company_billed_to,
        service_date_from=payload.service_date_from,
        service_date_to=payload.service_date_to,
        due_date=payload.due_date,
        number=payload.number,
        language=payload.language,
        currency=invoice_currency,
        status=invoice_status,
        product_type=invoice_product_type,
        vat_rate=payload.vat_rate,
        created_at=payload.created_at,
    )

    invoice_total = 0.0
    if payload.items:
        for invoice_item in payload.items:
            item = models.InvoiceItems.objects.create(
                description=invoice_item.description,
                quantity=invoice_item.quantity,
                price=invoice_item.price,
                total=invoice_item.quantity * invoice_item.price,
            )
            new_invoice.items.add(item)
            invoice_total += item.total

    new_invoice.total = invoice_total
    new_invoice.save()
    return {"status": 200, "invoice_created": new_invoice.id}


@router.get("/{id}", response=schemas.DisplayInvoice, auth=AuthBearer())
def get_invoice_by_id(request, id: int):
    invoice = models.Invoice.objects.filter(pk=id).first()
    if not invoice:
        raise HttpError(status_code=400, message=f"Invoice of id {id} doesn't exist!")
    return invoice


@router.delete("/{id}", response=schemas.DisplayInvoice, auth=AuthBearer())
def delete_invoice_by_id(request, id: int):
    models.Invoice.objects.filter(pk=id).delete()
    return {204, None}
