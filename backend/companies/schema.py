from ninja import Schema
from typing import Optional, List
from datetime import date, datetime


class DisplayUser(Schema):
    full_name: str
    email: str


class CreateCompany(Schema):
    company_name: Optional[str] = None
    url: Optional[str] = None
    user: str
    address_street: Optional[str] = None
    address_city: Optional[str] = None
    address_country: Optional[str] = None
    address_post_code: Optional[str] = None
    vat_number: Optional[str] = None
    tax_number: Optional[str] = None


class DisplayCompany(Schema):
    company_id: int
    company_name: Optional[str] = None
    url: Optional[str] = None
    user: DisplayUser
    address_street: Optional[str] = None
    address_city: Optional[str] = None
    address_country: Optional[str] = None
    address_post_code: Optional[str] = None
    vat_number: Optional[str] = None
    tax_number: Optional[str] = None


class UpdateCompany(Schema):
    company_name: Optional[str]
    url: Optional[str]
    address_street: Optional[str]
    address_city: Optional[str]
    address_country: Optional[str]
    address_post_code: Optional[str]
    vat_number: Optional[str]
    tax_number: Optional[str]
