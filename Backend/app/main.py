# app/main.py
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .database import engine
from . import models
from .routers import contact
# from .config import FRONTEND_URLS

# Create DB tables (simple approach). For production use Alembic.
models.Base.metadata.create_all(bind=engine)

app = FastAPI(title="BBA Associates API")

# Configure allowed origins
# if FRONTEND_URLS:
#     origins = [u.strip() for u in FRONTEND_URLS.split(",")]
# else:
origins = ["*"]  # in production restrict this to your Vercel domain

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(contact.router)
