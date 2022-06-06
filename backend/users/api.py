from re import U
from ninja import Router, Schema
from ninja.security import HttpBearer
from ninja.errors import HttpError
from datetime import date
from .models import User
from typing import List, Optional

router = Router(tags=["users"])


class CreateUser(Schema):
    email: str
    full_name: str
    created_at: date = date.today()


class UserDetails(Schema):
    email: str
    full_name: str
    profession: Optional[str] = None


class AuthBearer(HttpBearer):
    def authenticate(self, request, token):
        if token == "supersecret":
            return token


@router.post("/profile/{email}", response=UserDetails)
def get_user_profile(request, email: str):
    user = User.objects.filter(pk=email).first()
    if not user:
        raise HttpError(
            status_code=400, message=f"User with email {email} doesn't exist"
        )
    return user


@router.get("/", response=List[UserDetails])
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
