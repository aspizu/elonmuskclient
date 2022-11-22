from fastapi import FastAPI
from fastapi.responses import FileResponse
from fastapi.staticfiles import StaticFiles

app = FastAPI()
app.mount("/static", StaticFiles(directory="static"), name="static")


@app.get("/{path:path}")
def spa_route(path: str):
    return FileResponse("static/index.html")
