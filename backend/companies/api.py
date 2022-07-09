from django.shortcuts import get_object_or_404
from ninja import Router
from ninja.errors import HttpError
from typing import List
from users.api import AuthBearer
from users.models import User, UserCompany
from .models import Company
from . import schema


router = Router(tags=["companies"])


@router.post("/")
def create_company(request, payload: schema.CreateCompany):
    user = User.objects.filter(pk=payload.user).first()
    if not user:
        raise HttpError(
            status_code=400,
            message=f"User with email {payload.user} doesn't exist!",
        )
    payload.user = user
    company = Company.objects.create(**payload.dict())
    return {"company": company.company_name}


@router.get("/{email}", response=List[schema.DisplayCompany], auth=AuthBearer())
def get_user_companies(request, email: str):
    return Company.objects.filter(user__email=email)


@router.put("/profile/{email}")
def update_user_company(request, email: str, payload: schema.UpdateCompany):
    user = User.objects.get(pk=email)
    company = get_object_or_404(Company, user=user)
    for attr, value in payload.dict().items():
        setattr(company, attr, value)
    company.save()
    return {"detail": "accepted"}


@router.put("/clients/{user_email}/{company_id}")
def update_user_client_company(
    request, user_email: str, company_id: int, payload: schema.UpdateCompany
):
    company = Company.objects.filter(
        user__email=user_email, company_id=company_id
    ).first()
    for attr, value in payload.dict().items():
        setattr(company, attr, value)
    company.save()
    return {"detail": "accepted"}


@router.get("/{name}", response=schema.DisplayCompany, auth=AuthBearer())
def get_company_by_name(request, name: str):
    company = Company.objects.filter(name=name.lower()).first()

    if not company:
        raise HttpError(
            status_code=400,
            message=f"Company of name {name} doesn't exist!",
        )

    return company


@router.delete("/{user_email}/{company_id}", response={204: None}, auth=AuthBearer())
def delete_company_by_name(request, user_email: str, company_id: str):
    Company.objects.filter(user__email=user_email, company_id=company_id).delete()
    return 204, None
