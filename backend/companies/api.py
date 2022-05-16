from ninja import Router, Schema
from ninja.errors import HttpError
from typing import List, Optional
from users.api import BasicAuth, SmallUser
from users.models import User
from .models import Company


router = Router(tags=["companies"])


class CreateCompany(Schema):
    name: str
    url: str
    user: str
    address_street: str
    address_city: str
    address_country: str
    address_post_code: str


class DisplayCompany(Schema):
    name: str
    url: str
    user: SmallUser
    address_street: str
    address_city: str
    address_country: str
    address_post_code: str


class UpdateCompany(Schema):
    name: Optional[str]
    url: Optional[str]
    user: Optional[str]
    address_street: Optional[str]
    address_city: Optional[str]
    address_country: Optional[str]
    address_post_code: Optional[str]


@router.post("/", auth=BasicAuth())
def create_company(request, payload: CreateCompany):
    user = User.objects.filter(pk=payload.user).first()
    if not user:
        raise HttpError(
            status_code=400, message=f"User with email {payload.user} doesn't exist!"
        )

    payload.user = user
    payload.name = payload.name.lower()
    company = Company.objects.create(**payload.dict())
    return {"company": company.name}


@router.get("/", response=List[DisplayCompany], auth=BasicAuth())
def get_all_companies(request):
    return Company.objects.all()


@router.get("/{name}", response=DisplayCompany, auth=BasicAuth())
def get_company_by_name(request, name: str):
    company = Company.objects.filter(name=name.lower()).first()

    if not company:
        raise HttpError(
            status_code=400,
            message=f"Company of name {name} doesn't exist!",
        )

    return company


@router.delete("/{name}", response={204: None}, auth=BasicAuth())
def delete_company_by_name(request, name: str):
    Company.objects.filter(name=name.lower()).delete()
    return 204, None
