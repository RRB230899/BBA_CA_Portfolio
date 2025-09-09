# app/crud.py
from sqlalchemy.orm import Session
from . import models, schemas

def create_contact(db: Session, contact: schemas.ContactCreate) -> models.Contact:
    db_contact = models.Contact(**contact.model_dump())  # pydantic v2
    db.add(db_contact)
    db.commit()
    db.refresh(db_contact)
    return db_contact
