from fastapi import FastAPI, Request
import subprocess

app = FastAPI()


@app.post("/github-webhook")
async def github_webhook(request: Request):
    payload = await request.json()
    if payload.get("ref") == "refs/heads/main":
        subprocess.Popen(["./deploy.sh"])
    return {"status": "ok"}
