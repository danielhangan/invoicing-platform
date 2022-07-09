from ninja import Router
from ninja.errors import HttpError
from typing import List, Optional
from . import schema
from users.api import AuthBearer

from invoices import models
from users.models import User
from currencies.models import FiatCurrency
from companies.models import Company


router = Router(tags=["invoices"])


@router.get("/", response=List[schema.DisplayInvoice], auth=AuthBearer())
def get_all_invoice(request):
    return models.Invoice.objects.all()


@router.get(
    "/user/{user_email}", response=List[schema.DisplayInvoice], auth=AuthBearer()
)
def get_all_user_invoices(request, user_email: str):
    return models.Invoice.objects.filter(created_by_user=user_email).all()


@router.post("/", auth=AuthBearer())
def create_invoice(request, payload: schema.CreateInvoice):
    user = User.objects.filter(email=payload.created_by_user).first()
    if not user:
        raise HttpError(
            status_code=400,
            message=f"User with email {request.created_by_user} doesn't exist!",
        )

    invoice_currency = FiatCurrency.objects.filter(code=payload.currency).first()
    if not invoice_currency:
        raise HttpError(
            status_code=400,
            message=f"Fiat Currency of code {payload.currency} doesn't exist!",
        )

    invoice_status = models.InvoiceStatusTypes.objects.filter(
        name=payload.status
    ).first()
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
        created_by_user=user,
        issuer_email=payload.issuer_email,
        issuer_company_name=payload.issuer_company_name,
        issuer_address_street=payload.issuer_address_street,
        issuer_address_city=payload.issuer_address_city,
        issuer_address_country=payload.issuer_address_country,
        issuer_address_post_code=payload.issuer_address_post_code,
        issuer_vat_number=payload.issuer_vat_number,
        issuer_tax_number=payload.issuer_tax_number,
        billed_email=payload.billed_email,
        billed_company_name=payload.billed_company_name,
        billed_address_street=payload.billed_address_street,
        billed_address_city=payload.billed_address_city,
        billed_address_country=payload.billed_address_country,
        billed_address_post_code=payload.billed_address_post_code,
        billed_vat_number=payload.billed_vat_number,
        billed_tax_number=payload.billed_tax_number,
        service_date_from=payload.service_date_from,
        service_date_to=payload.service_date_to,
        due_date=payload.due_date,
        currency=invoice_currency,
        status=invoice_status,
        product_type=invoice_product_type,
        vat_rate=payload.vat_rate,
    )

    invoice_total = 0.0
    if payload.items:
        for invoice_item in payload.items:
            item = models.InvoiceItems.objects.create(
                invoice_id=new_invoice,
                description=invoice_item.description,
                quantity=invoice_item.quantity,
                price=invoice_item.price,
                item_total=invoice_item.quantity * invoice_item.price,
            )
            new_invoice.items.add(item)
            invoice_total += item.item_total

    new_invoice.total = invoice_total
    new_invoice.save()
    return {"status": 200, "invoice_created": new_invoice.invoice_id}


@router.put("/{invoice_id}")
def update_invoice(request, invoice_id: int, payload: schema.UpdateInvoice):
    invoice_obj = models.Invoice.objects.filter(
        invoice_id=invoice_id,
    ).first()

    if payload.items:
        models.InvoiceItems.objects.filter(invoice_id=invoice_id).delete()

        invoice_total = 0.0
        for invoice_item in payload.items:
            item = models.InvoiceItems.objects.create(
                invoice_id=invoice_obj,
                description=invoice_item.description,
                quantity=invoice_item.quantity,
                price=invoice_item.price,
                item_total=invoice_item.quantity * invoice_item.price,
            )
            invoice_obj.items.add(item)
            invoice_total += item.item_total

        invoice_obj.total = invoice_total
        del payload.items

    if payload.currency:
        invoice_currency = FiatCurrency.objects.filter(code=payload.currency).first()
        if not invoice_currency:
            raise HttpError(
                status_code=400,
                message=f"Fiat Currency of code {payload.currency} doesn't exist!",
            )
        invoice_obj.currency = invoice_currency
        del payload.currency

    if payload.status:
        invoice_status = models.InvoiceStatusTypes.objects.filter(
            name=payload.status
        ).first()
        if not invoice_status:
            raise HttpError(
                status_code=400,
                message=f"Invoice Status of type {payload.status.lower()} doesn't exist!",
            )
        invoice_obj.status = invoice_status
        del payload.status

    if payload.product_type:
        invoice_product_type = models.InvoiceProductTypes.objects.filter(
            name=payload.product_type
        ).first()
        if not invoice_product_type:
            raise HttpError(
                status_code=400,
                message=f"Invoice product type {payload.product_type.lower()} doesn't exist!",
            )
        invoice_obj.product_type = invoice_product_type
        del payload.product_type

    for attr, value in payload.dict().items():
        setattr(invoice_obj, attr, value) if value is not None else None

    invoice_obj.save()
    return {"detail": "accepted"}


@router.get("/{invoice_id}", response=schema.DisplayInvoice, auth=AuthBearer())
def get_invoice_by_id(request, invoice_id: int):
    invoice = models.Invoice.objects.filter(invoice_id=invoice_id).first()
    if not invoice:
        raise HttpError(status_code=400, message=f"Invoice of id {id} doesn't exist!")
    return invoice


@router.delete("/{invoice_id}", auth=AuthBearer())
def delete_invoice_by_id(request, invoice_id: int):
    models.Invoice.objects.get(pk=invoice_id).delete()
    return 204
