# app/config.py
from dotenv import load_dotenv
import os

load_dotenv()  # loads .env in development

DATABASE_URL = os.getenv("DATABASE_URL")
# FRONTEND_URLS = os.getenv("FRONTEND_URLS")
