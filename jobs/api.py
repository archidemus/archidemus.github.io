import http.server
import socketserver
import os
from pathlib import Path
from dotenv import load_dotenv

# Cargar variables de entorno desde archivo .env
load_dotenv()

# Configura el puerto donde se ejecutará el servidor
PORT = 8000

# Configura el directorio que quieres servir
# Por defecto usa el directorio actual, pero puedes cambiarlo
DIRECTORY = Path(os.getenv("WORKDIR_PATH"))

# Cambia al directorio que quieres servir
os.chdir(DIRECTORY)

# Crea el manejador
Handler = http.server.SimpleHTTPRequestHandler

# Configura y ejecuta el servidor
with socketserver.TCPServer(("", PORT), Handler) as httpd:
    print(f"Sirviendo archivos desde: {DIRECTORY}")
    print(f"Servidor accesible en: http://localhost:{PORT}")

    # Mantén el servidor corriendo
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\nServidor detenido.")
