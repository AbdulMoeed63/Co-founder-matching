from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="Cohatch API", version="0.1.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def root():
    return {"message": "Cohatch API is running"}

@app.get("/api/health")
def health():
    return {"status": "healthy"}

@app.post("/api/match")
def match():
    return {
        "message": "AI matching endpoint placeholder",
        "matches": []
    }
