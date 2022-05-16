from ninja import Schema
from datetime import date, datetime
from typing import List, Optional
from users.api import SmallUser
from companies.api import DisplayCompany


class InvoiceStatus(Schema):
    name: str


class InvoiceProductType(Schema):
    name: str


class InvoiceItem(Schema):
    description: str
    quantity: float
    price: float


class CreateInvoice(Schema):
    user: str
    issuer: str
    billed_to: str
    service_date_from: date
    service_date_to: date
    due_date: date
    number: int
    language: str
    currency: str
    status: str
    product_type: str
    items: Optional[List[InvoiceItem]] = []
    vat_rate: Optional[float] = 0.0
    created_at: datetime = datetime.now()


class ShowCurrency(Schema):
    code: str
    country: str


class DisplayInvoice(Schema):
    user: SmallUser
    issuer: DisplayCompany
    billed_to: DisplayCompany
    service_date_from: date
    service_date_to: date
    due_date: date
    number: int
    language: str
    currency: ShowCurrency
    status: InvoiceStatus
    product_type: InvoiceProductType
    items: Optional[List[InvoiceItem]] = []
    vat_rate: Optional[float] = 0.0
    total: float
    created_at: datetime
    updated_at: datetime = None
