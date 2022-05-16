from django.contrib.auth.hashers import make_password, check_password
from ninja import Router, Schema
from ninja.security import HttpBasicAuth
from datetime import date
from .models import User
from typing import List

router = Router(tags=["users"])


class CreateUser(Schema):
    email: str
    first_name: str
    second_name: str
    password: str
    created_at: date = date.today()


class SmallUser(Schema):
    email: str
    first_name: str
    second_name: str
    created_at: date = date.today()


class BigUser(Schema):
    email: str
    first_name: str
    second_name: str
    password: str
    created_at: date = date.today()


class BasicAuth(HttpBasicAuth):
    def authenticate(self, request, username, password):
        user = User.objects.filter(pk=username).first()
        if user and check_password(password, user.password):
            return username


@router.post("/login", auth=BasicAuth())
def login(request):
    return {"status": 200}


@router.get("/", response=List[BigUser])
def get_all_users(request):
    return User.objects.all()


@router.post("/", auth=BasicAuth())
def create_user(request, payload: CreateUser):
    payload.password = make_password(payload.password)
    user = User.objects.create(**payload.dict())
    return {"email": user.email}


@router.get("/{user_email}", response=BigUser, auth=BasicAuth())
def get_user_by_email(request, user_email: str):
    return User.objects.get(pk=user_email)


@router.delete("/{user_email}", response={204: None}, auth=BasicAuth())
def delete_user_by_email(request, user_email: str):
    User.objects.get(pk=user_email).delete()
    return 204, None
