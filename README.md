<img width="1440" height="696" alt="Captura de Tela 2026-03-09 às 23 52 43" src="https://github.com/user-attachments/assets/0fac71a5-27ca-405f-9020-f4fcae7f2b83" /># Site Dr. Álex Cavalcante - Psicólogo e Psicanalista

## 📋 Sobre o Projeto
Site institucional para psicólogo com consultório em Florianópolis, incluindo:
- Design responsivo e moderno
- Seções: Sobre, Serviços, Benefícios, Avaliações, FAQ, Contato
- Assistente virtual com IA (Google Gemini)
- Integração com WhatsApp e Doctoralia
- Mapa interativo do consultório

## 🛠️ Tecnologias Utilizadas
### Frontend
- React.js
- Tailwind CSS
- Lucide Icons
- Shadcn/ui

### Backend
- Python Flask
- MongoDB Atlas
- Google Gemini AI
- Flask CORS

## 🚀 Como executar localmente

### Pré-requisitos
- Node.js (v18+)
- Python (v3.9+)
- MongoDB Atlas (conta grátis)

### Passo a passo

1. **Clone o repositório**
bash 
git clone https://github.com/Daniel-Leaes68/dr-alex-site.git
cd dr-alex-site

2. Configure o backend
cd backend
pip install -r requirements.txt

Crie um arquivo .env na pasta backend com:
MONGODB_URI=sua-string-de-conexao-mongodb
MONGODB_DATABASE=psicologo_db
GEMINI_API_KEY=sua-chave-do-gemini

Execute o servidor:
python3 app.py


3. Configure o frontend
cd ../frontend
npm install
npm start

4. Acesse o site
http://localhost:3000



🤖 Sobre o Assistente Virtual
O chatbot foi treinado com informações reais do consultório:

- Especialidades: Neuropsicologia, Psicanálise, Terapia de Casal

- Valores das consultas

- Endereço e formas de atendimento (presencial/online)

- Coleta de dados para agendamento

- Respeita o código de ética (não dá diagnósticos)
<img width="1437" height="694" alt="Captura de Tela 2026-03-09 às 23 53 22" src="https://github.com/user-attachments/assets/4bc0c8a2-57c4-4bb9-b4a6-4c3dea5e2e3a" />


📧 Contato
Desenvolvedor: Daniel Leaes

GitHub: Daniel-Leaes68

LinkedIn: (https://www.linkedin.com/in/daniel-le%C3%A3es-7264b73b1/)

📝 Licença
Este projeto foi desenvolvido para fins de portfólio e demonstração.
