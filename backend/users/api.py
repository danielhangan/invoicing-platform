from django.shortcuts import get_object_or_404
from ninja import Router, Schema
from ninja.security import HttpBearer
from ninja.errors import HttpError
from datetime import date
from .models import User
from companies.models import Company
from typing import List, Optional

router = Router(tags=["users"])


class CreateUser(Schema):
    email: str
    full_name: str
    created_at: date = date.today()


class DisplayUser(Schema):
    email: str
    full_name: str
    profession: Optional[str] = None


class UpdateUser(Schema):
    full_name: Optional[str]
    profession: Optional[str]


class DisplayCompany(Schema):
    company_name: str = None
    url: str = None
    address_street: str = None
    address_city: str = None
    address_country: str = None
    address_post_code: str = None
    vat_number: str = None
    tax_number: str = None
    founded_on: date = None


class UserProfile(Schema):
    profile: DisplayUser
    company: DisplayCompany


class AuthBearer(HttpBearer):
    def authenticate(self, request, token):
        if token == "supersecret":
            return token


@router.get("/profile/{email}", response=UserProfile)
def get_user_profile(request, email: str):
    user = User.objects.filter(pk=email).first()
    if not user:
        raise HttpError(
            status_code=400, message=f"User with email {email} doesn't exist"
        )
    user_company = Company.objects.filter(user=user.email, profile_company=True).first()
    return {"profile": user, "company": user_company}


@router.put("/{email}")
def update_user_profile(request, email: str, payload: UpdateUser):
    user = get_object_or_404(User, email=email)
    for attr, value in payload.dict().items():
        setattr(user, attr, value)
    user.save()
    return {"detail": "accepted"}


@router.get("/", response=List[DisplayUser])
def get_all_users(request):
    return User.objects.all()


@router.post("/", auth=AuthBearer())
def create_user(request, payload: CreateUser):
    check_user = User.objects.filter(pk=payload.email).first()
    if not check_user:
        user = User.objects.create(**payload.dict())
        user_company = Company.objects.filter(user__email=payload.email).first()
        print(user_company)
        if not user_company:
            Company.objects.create(user=user, profile_company=True)
        return {"user": payload.email}
    return {"user": check_user.email}


@router.delete("/{user_email}", response={204: None}, auth=AuthBearer())
def delete_user_by_email(request, user_email: str):
    try:
        User.objects.get(pk=user_email).delete()
    except Exception as e:
        print(e)
    return 204, None
