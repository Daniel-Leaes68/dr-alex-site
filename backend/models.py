from datetime import datetime
from database.connection import db

class MessageModel:
    collection = db.messages
    
    @staticmethod
    def create(data):
        message = {
            "name": data.get('name'),
            "email": data.get('email'),
            "phone": data.get('phone', ''),
            "message": data.get('message'),
            "created_at": datetime.utcnow(),
            "status": "new",  # new, read, replied
            "ip_address": data.get('ip_address')
        }
        result = MessageModel.collection.insert_one(message)
        return str(result.inserted_id)

class TestimonialModel:
    collection = db.testimonials
    
    @staticmethod
    def create(data):
        testimonial = {
            "name": data.get('name'),
            "text": data.get('text'),
            "rating": data.get('rating', 5),
            "approved": False,
            "created_at": datetime.utcnow()
        }
        result = TestimonialModel.collection.insert_one(testimonial)
        return str(result.inserted_id)
    
    @staticmethod
    def get_approved():
        return list(TestimonialModel.collection.find(
            {"approved": True}
        ).sort("created_at", -1))

class AppointmentModel:
    collection = db.appointments
    
    @staticmethod
    def create(data):
        appointment = {
            "name": data.get('name'),
            "email": data.get('email'),
            "phone": data.get('phone'),
            "preferred_date": data.get('preferred_date'),
            "preferred_time": data.get('preferred_time'),
            "message": data.get('message', ''),
            "status": "pending",
            "created_at": datetime.utcnow()
        }
        result = AppointmentModel.collection.insert_one(appointment)
        return str(result.inserted_id)