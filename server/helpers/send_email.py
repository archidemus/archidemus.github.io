import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from dotenv import load_dotenv
import os

# Cargar variables de entorno desde .env
load_dotenv()


def send_email(destinatario: str, asunto: str, cuerpo: str) -> bool:
    """
    Envía un correo desde Gmail usando variables de entorno.

    Parámetros:
    - destinatario: correo del destinatario
    - asunto: asunto del correo
    - cuerpo: contenido del mensaje

    Retorna:
    - True si se envió correctamente, False si hubo error
    """
    remitente = os.getenv("GMAIL_USER")
    password_aplicacion = os.getenv("GMAIL_APP_PASSWORD")

    if not remitente or not password_aplicacion:
        print("⚠️ Credenciales no encontradas en el archivo .env")
        return False

    msg = MIMEMultipart()
    msg["From"] = remitente
    msg["To"] = destinatario
    msg["Subject"] = asunto
    msg.attach(MIMEText(cuerpo, "plain"))

    try:
        with smtplib.SMTP_SSL("smtp.gmail.com", 465) as server:
            server.login(remitente, password_aplicacion)
            server.send_message(msg)
        print("✅ Correo enviado exitosamente")
        return True
    except Exception as e:
        print(f"❌ Error al enviar el correo: {e}")
        return False
