from optparse import Option
from ninja import Schema
from datetime import date, datetime
from typing import List, Optional

from pyparsing import Opt
from users.api import DisplayUser
from companies.schema import DisplayCompany


class InvoiceStatusType(Schema):
    name: str


class InvoiceProductType(Schema):
    name: str


class InvoiceItem(Schema):
    id: Optional[int] = None
    description: str
    quantity: float
    price: float


class CreateInvoice(Schema):
    created_by_user: str
    invoice_code = str
    issuer_email: str
    issuer_company_name: str
    issuer_address_street: str
    issuer_address_city: str
    issuer_address_country: str
    issuer_address_post_code: str
    issuer_vat_number: str
    issuer_tax_number: str

    billed_email: str
    billed_company_name: str
    billed_address_street: str
    billed_address_city: str
    billed_address_country: str
    billed_address_post_code: str
    billed_vat_number: str
    billed_tax_number: str

    service_date_from: date
    service_date_to: date
    due_date: date
    currency: str
    status: str
    product_type: str
    items: Optional[List[InvoiceItem]] = []
    vat_rate: Optional[float] = 0.0


class ShowCurrency(Schema):
    code: str
    country: str


class DisplayInvoice(Schema):
    invoice_id: int
    invoice_code: Optional[str] = None
    issuer_email: Optional[str] = None
    issuer_company_name: str
    issuer_address_street: str
    issuer_address_city: str
    issuer_address_country: str
    issuer_address_post_code: str
    issuer_vat_number: str
    issuer_tax_number: str

    billed_email: Optional[str] = None
    billed_company_name: str
    billed_address_street: str
    billed_address_city: str
    billed_address_country: str
    billed_address_post_code: str
    billed_vat_number: str
    billed_tax_number: str

    service_date_from: date
    service_date_to: date
    due_date: date
    currency: ShowCurrency
    status: InvoiceStatusType
    product_type: InvoiceProductType
    items: Optional[List[InvoiceItem]] = []
    vat_rate: Optional[float] = 0.0
    created_at: datetime = None


class UpdateInvoice(Schema):
    invoice_code: Optional[str]
    issuer_email: Optional[str]
    issuer_company_name: Optional[str]
    issuer_address_street: Optional[str]
    issuer_address_city: Optional[str]
    issuer_address_country: Optional[str]
    issuer_address_post_code: Optional[str]
    issuer_vat_number: Optional[str]
    issuer_tax_number: Optional[str]

    billed_email: Optional[str]
    billed_company_name: Optional[str]
    billed_address_street: Optional[str]
    billed_address_city: Optional[str]
    billed_address_country: Optional[str]
    billed_address_post_code: Optional[str]
    billed_vat_number: Optional[str]
    billed_tax_number: Optional[str]

    service_date_from: Optional[date] = None
    service_date_to: Optional[date] = None
    due_date: Optional[date] = None
    currency: Optional[str]
    status: Optional[str]
    product_type: Optional[str]
    items: Optional[List[InvoiceItem]] = None
    vat_rate: Optional[float] = None
