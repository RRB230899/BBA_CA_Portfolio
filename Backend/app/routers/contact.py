# app/routers/contact.py
from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from .. import schemas, crud, database

router = APIRouter()

def get_db():
    db = database.SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.post("/contact", response_model=schemas.ContactOut, status_code=status.HTTP_201_CREATED)
def create_contact(contact: schemas.ContactCreate, db: Session = Depends(get_db)):
    try:
        saved = crud.create_contact(db, contact)
        return saved
    except Exception as e:
        # for production, log the real error and return a generic message
        raise HTTPException(status_code=500, detail="Database error")
