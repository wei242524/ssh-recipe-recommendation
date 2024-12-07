from .database import db

class Ingredient(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False)
    expiration_date = db.Column(db.Date, nullable=False)
    quantity = db.Column(db.Integer, nullable=False)
