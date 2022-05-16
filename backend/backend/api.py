from ninja import NinjaAPI
from users.api import router as users_router
from currencies.api import router as currencies_router
from companies.api import router as companies_router
from invoices.api import router as invoices_router

api = NinjaAPI()

api.add_router("/users/", users_router)
api.add_router("/currencies/", currencies_router)
api.add_router("/companies/", companies_router)
api.add_router("/invoices/", invoices_router)
