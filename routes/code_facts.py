from fastapi import APIRouter

from models import CodeResponse, CodeResponseModel
from utils import convert_json, generate_response

router = APIRouter(prefix="/code-facts", tags=["code-facts"])


@router.get(
    "/programming-languages",
    response_model=CodeResponseModel,
    description="Get all programming languages",
)
async def get_all_programming_languages():
    data: CodeResponse = {"python": 2}
    return generate_response(convert_json(data), "Programming languages returned")
