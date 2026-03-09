from pymongo import MongoClient
from dotenv import load_dotenv
import os

load_dotenv()

class MongoDB:
    _instance = None
    
    def __new__(cls):
        if cls._instance is None:
            cls._instance = super().__new__(cls)
            # Conecta ao MongoDB
            cls._instance.client = MongoClient(os.getenv('MONGODB_URI'))
            cls._instance.db = cls._instance.client[os.getenv('MONGODB_DATABASE')]
            print("✅ Conectado ao MongoDB com sucesso!")
        return cls._instance
    
    @property
    def messages(self):
        return self.db.messages
    
    @property
    def testimonials(self):
        return self.db.testimonials
    
    @property
    def appointments(self):
        return self.db.appointments

# Instância global do banco
db = MongoDB()