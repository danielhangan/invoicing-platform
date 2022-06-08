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


class DisplayCompany(Schema):
    company_name: str
    url: str
    address_street: str
    address_city: str
    address_country: str
    address_post_code: str
    vat_number: str
    tax_number: str
    founded_on: date


class UserProfile(Schema):
    profile: DisplayUser
    company: DisplayCompany


class AuthBearer(HttpBearer):
    def authenticate(self, request, token):
        if token == "supersecret":
            return token


@router.post("/profile/{email}", response=UserProfile)
def get_user_profile(request, email: str):
    user = User.objects.filter(pk=email).first()
    if not user:
        raise HttpError(
            status_code=400, message=f"User with email {email} doesn't exist"
        )
    user_company = Company.objects.filter(user=user.email).first()
    # print(user_company)
    return {"profile": user, "company": user_company}


@router.get("/", response=List[DisplayUser])
def get_all_users(request):
    return User.objects.all()


@router.post("/")
def create_user(request, payload: CreateUser):
    check_user = User.objects.filter(pk=payload.email).first()
    if not check_user:
        user = User.objects.create(**payload.dict())
        return {"email": user.email}
    return {"email": check_user.email}


@router.delete("/{user_email}", response={204: None}, auth=AuthBearer())
def delete_user_by_email(request, user_email: str):
    User.objects.get(pk=user_email).delete()
    return 204, None
