# app/schemas.py
from pydantic import BaseModel, EmailStr
from datetime import datetime

class ContactCreate(BaseModel):
    name: str
    email: EmailStr
    message: str

class ContactOut(ContactCreate):
    id: int
    created_at: datetime
    model_config = { "from_attributes": True }  # pydantic v2: allow ORM mode
