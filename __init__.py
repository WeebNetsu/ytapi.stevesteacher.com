from dotenv import dotenv_values
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from routes import router as root_router
from routes.code_facts import router as code_facts_router

config = dotenv_values(".env")

if config["ENV"] == "dev":
    # ! we should NOT allow all origins in production!
    allowed_origins = [
        # "http://localhost",
        # "http://localhost:3000",
        # "http://localhost:19006",
        "*",
    ]  # for CORS


app = FastAPI()

app.include_router(root_router)
app.include_router(code_facts_router)

if config["ENV"] == "dev":
    app.add_middleware(
        CORSMiddleware,
        allow_origins=allowed_origins,
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )
