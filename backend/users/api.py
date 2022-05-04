from ninja import Router
import asyncio

router = Router(tags=["users"])


@router.get("/")
async def get_all_users(request):
    return "Hello World"


@router.post("/")
async def create_user(request):
    return "Hello World"


@router.get("/{user_email}")
async def get_all_users(request, user_email: str):
    return "Hello World"