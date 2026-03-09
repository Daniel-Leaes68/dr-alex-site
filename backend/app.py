from assistant import PsicologoAssistant
from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_mail import Mail, Message
from dotenv import load_dotenv
import os
from datetime import datetime
from models import MessageModel, TestimonialModel, AppointmentModel

load_dotenv()

app = Flask(__name__)
CORS(app)  # Permite o React acessar a API

# Inicializar assistente
assistant = PsicologoAssistant()

# Configuração de email
app.config['MAIL_SERVER'] = os.getenv('MAIL_SERVER')
app.config['MAIL_PORT'] = int(os.getenv('MAIL_PORT'))
app.config['MAIL_USE_TLS'] = os.getenv('MAIL_USE_TLS').lower() == 'true'
app.config['MAIL_USERNAME'] = os.getenv('MAIL_USERNAME')
app.config['MAIL_PASSWORD'] = os.getenv('MAIL_PASSWORD')

mail = Mail(app)

# Rota de teste
@app.route('/api/health', methods=['GET'])
def health_check():
    return jsonify({
        "status": "healthy", 
        "timestamp": datetime.utcnow(),
        "message": "API do Dr. Álex funcionando!"
    })

# Rota para receber mensagens de contato
@app.route('/api/contact', methods=['POST'])
def contact():
    try:
        data = request.json
        
        # Validar campos obrigatórios
        if not data.get('name') or not data.get('email') or not data.get('message'):
            return jsonify({"error": "Nome, email e mensagem são obrigatórios"}), 400
        
        # Salvar no MongoDB
        message_id = MessageModel.create({
            **data,
            "ip_address": request.remote_addr
        })
        
        # Enviar email de notificação
        try:
            msg = Message(
                subject=f"Nova mensagem de {data['name']} - Site Psicólogo",
                sender=app.config['MAIL_USERNAME'],
                recipients=[app.config['MAIL_USERNAME']]
            )
            msg.body = f"""
            Nova mensagem do site!
            
            Nome: {data['name']}
            Email: {data['email']}
            Telefone: {data.get('phone', 'Não informado')}
            
            Mensagem:
            {data['message']}
            
            Data: {datetime.utcnow().strftime('%d/%m/%Y %H:%M')}
            """
            mail.send(msg)
            print("✅ Email enviado com sucesso!")
        except Exception as e:
            print(f"⚠️ Erro ao enviar email: {e}")
        
        return jsonify({
            "success": True,
            "message": "Mensagem enviada com sucesso! Em breve entraremos em contato.",
            "id": message_id
        }), 201
        
    except Exception as e:
        return jsonify({"error": str(e)}), 500

# Rota para agendamento
@app.route('/api/appointments', methods=['POST'])
def create_appointment():
    try:
        data = request.json
        appointment_id = AppointmentModel.create(data)
        
        return jsonify({
            "success": True,
            "message": "Solicitação de agendamento enviada!",
            "id": appointment_id
        }), 201
    except Exception as e:
        return jsonify({"error": str(e)}), 500

# Rota do chat com IA do Gemini
@app.route('/api/chat', methods=['POST'])
def chat():
    try:
        data = request.json
        user_message = data.get('message')
        
        response = assistant.get_response(user_message)
        
        return jsonify({
            "response": response,
            "timestamp": datetime.utcnow()
        })
    except Exception as e:
        print(f"Erro no chat: {e}")
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    print("🚀 Iniciando servidor backend...")
    app.run(debug=True, port=5001)