# Cohatch — AI Cofounder Matching

A starter repository for the Cohatch AI Cofounder Matching Final Year Project.

## Stack
- Frontend: React + Vite
- Styling: CSS
- Backend: Python + FastAPI
- Future database: MongoDB

## Run frontend
```bash
cd frontend
npm install
npm run dev
```

## Run backend
```bash
cd backend
python -m venv venv
# Windows
venv\Scripts\activate
pip install -r requirements.txt
uvicorn main:app --reload
```

The frontend is intentionally a starter UI. AI matching, resume parsing, psychological compatibility, investor verification, and MongoDB can be connected later.
