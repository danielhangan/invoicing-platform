from typing import Optional, List
from ninja import Router, Schema
from ninja.errors import HttpError
from .models import FiatCurrency
from users.api import BasicAuth


router = Router(tags=["currencies"])


class DisplayFiatCurrency(Schema):
    name: str
    code: str
    symbol: str
    country: str


class UpdateFiatCurrency(Schema):
    name: Optional[str]
    code: Optional[str]
    symbol: Optional[str]
    country: Optional[str]


@router.post("/", auth=BasicAuth())
def create_fiat_currency(request, payload: DisplayFiatCurrency):
    fiatcurrency = FiatCurrency.objects.create(**payload.dict())
    return {"fiat_currency": fiatcurrency.name}


@router.get("/", response=List[DisplayFiatCurrency], auth=BasicAuth())
def get_all_fiat_currencies(request):
    return FiatCurrency.objects.all()


@router.get("/{code}", response=DisplayFiatCurrency, auth=BasicAuth())
def get_fiat_currency_by_code(request, code: str):
    fiat_currency = FiatCurrency.objects.filter(code=code).first()

    if not fiat_currency:
        raise HttpError(
            status_code=400,
            message=f"Currency with code {fiat_currency} doesn't exist!",
        )

    return fiat_currency


@router.delete("/{code}", response={204: None}, auth=BasicAuth())
def delete_fiat_currency_by_code(request, code: str):
    FiatCurrency.objects.filter(code=code).delete()
    return 204, None
