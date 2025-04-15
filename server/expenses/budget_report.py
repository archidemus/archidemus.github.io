from expenses.scraper.get_transactions import get_transactions
from helpers.send_email import send_email
from datetime import datetime
import locale

locale.setlocale(locale.LC_TIME, "")

PRESUPUESTO = 2733588


def budget_report(save):
    transactions = get_transactions(save)
    transactions_total = 0
    for t in transactions:
        transactions_total += t["monto"]
    plata_restante = 2733588 - transactions_total
    ahora = datetime.now()
    fecha_formateada = ahora.strftime("%-d de %B de %Y | %H:%M")
    send_email(
        "inorambuenaa@gmail.com",
        f"Reporte {fecha_formateada}",
        f"""Hola Ignacio,

Presupuest {PRESUPUESTO}
Gastos {transactions_total}
Restante {plata_restante}

¡Saludos!
""",
    )
