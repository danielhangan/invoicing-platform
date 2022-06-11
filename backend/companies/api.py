from datetime import datetime, date
from django.shortcuts import get_object_or_404
from ninja import Router, Schema
from ninja.errors import HttpError
from typing import List, Optional
from users.api import AuthBearer, DisplayUser
from users.models import User
from .models import Company


router = Router(tags=["companies"])


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
    founded_on: Optional[date] = None


class DisplayCompany(Schema):
    company_name: str
    url: str
    user: str
    address_street: str
    address_city: str
    address_country: str
    address_post_code: str
    vat_number: str
    tax_number: str
    founded_on: date


class UpdateCompany(Schema):
    company_name: Optional[str]
    url: Optional[str]
    address_street: Optional[str]
    address_city: Optional[str]
    address_country: Optional[str]
    address_post_code: Optional[str]
    vat_number: Optional[str]
    tax_number: Optional[str]
    founded_on: Optional[date]


@router.post("/")
def create_company(request, payload: CreateCompany):
    user = User.objects.filter(pk=payload.user).first()
    if not user:
        raise HttpError(
            status_code=400,
            message=f"User with email {payload.user} doesn't exist!",
        )
    payload.user = user
    company = Company.objects.create(**payload.dict())
    return {"company": company.company_name}


@router.get("/", response=List[DisplayCompany], auth=AuthBearer())
def get_all_companies(request):
    return Company.objects.all()


@router.put("/{email}")
def update_company(request, email: str, payload: UpdateCompany):
    user = User.objects.get(pk=email)
    company = get_object_or_404(Company, user=user, profile_company=True)
    for attr, value in payload.dict().items():
        setattr(company, attr, value)
    company.save()
    print("hey")
    return {"detail": "accepted"}


@router.get("/{name}", response=DisplayCompany, auth=AuthBearer())
def get_company_by_name(request, name: str):
    company = Company.objects.filter(name=name.lower()).first()

    if not company:
        raise HttpError(
            status_code=400,
            message=f"Company of name {name} doesn't exist!",
        )

    return company


@router.delete("/{name}", response={204: None}, auth=AuthBearer())
def delete_company_by_name(request, name: str):
    Company.objects.filter(name=name.lower()).delete()
    return 204, None
