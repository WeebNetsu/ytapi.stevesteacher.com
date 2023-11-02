from pydantic import BaseModel, Field


class BaseResponse(BaseModel):
    success: bool = Field(
        True,
        example=True,
        description="If action was successful, will be true",
    )


class BaseResponseModel(BaseModel):
    data: BaseResponse | None
    code: int = Field(..., example=200, gt=99, lt=600)
    message: str = Field(..., example="Success")


class CodeResponse(BaseModel):
    python: int = Field(
        2,
        example=2,
        description="If action was successful, will be true",
    )


class CodeResponseModel(BaseModel):
    data: CodeResponse | None
    code: int = Field(..., example=200, gt=99, lt=600)
    message: str = Field(..., example="Success")
