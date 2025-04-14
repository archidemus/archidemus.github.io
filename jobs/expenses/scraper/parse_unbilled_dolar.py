import os
import json
from datetime import datetime
from lxml import etree
from pathlib import Path


def parse_unbilled_dolar(unbilled_file: Path | str, workdir: Path):
    if isinstance(unbilled_file, str):
        contenido = unbilled_file
    else:
        # Extraer transacciones
        print(f"Procesando archivo: {unbilled_file}")

        # Verificar que el archivo existe
        if not os.path.exists(unbilled_file):
            print(f"El archivo {unbilled_file} no existe")
            return []

        # Leer el archivo
        with open(unbilled_file, "r", encoding="utf-8") as f:
            contenido = f.read()

    # Usar XPath para encontrar elementos
    transacciones = []
    dom = etree.HTML(contenido)
    transacciones_xpath = '//*[@id="by-bill-container"]/div/div[3]/table/tbody/tr'
    elementos_transaccion = dom.xpath(transacciones_xpath)

    last_fecha = None
    for elemento in elementos_transaccion:
        try:
            fecha = (
                elemento[0].text.replace(" ", "")
                if not elemento[0].text.isspace()
                else None
            )
            detalle = elemento[2].text.replace(" ", "")
            cargo = (
                elemento[3]
                .text.replace(" ", "")
                .replace("USD", "")
                .replace(".", "")
                .replace("+", "")
                .replace(",", ".")
            )
            abono = (
                elemento[4]
                .text.replace(" ", "")
                .replace("USD", "")
                .replace(".", "")
                .replace("+", "")
                .replace(",", ".")
            )

            transaccion = {
                "fecha": fecha or last_fecha,
                "detalle": detalle,
                "monto": float(cargo or abono),
            }
            transacciones.append(transaccion)
            last_fecha = transaccion["fecha"]

        except AttributeError:
            continue

    print(f"Se encontraron {len(transacciones)} transacciones")

    # Guardar resultados
    if transacciones:
        current_datetime = datetime.now()
        date = current_datetime.strftime("%d%m%Y")
        timestamp = current_datetime.timestamp()
        archivo_salida = (
            workdir / "transacciones" / f"dolar_unbilled_{date}_{timestamp}.json"
        )

        os.makedirs(os.path.dirname(archivo_salida), exist_ok=True)
        with open(archivo_salida, "w", encoding="utf-8") as f:
            f.write(json.dumps(transacciones))

        print(f"Transacciones guardadas en {archivo_salida}")


if __name__ == "__main__":
    from dotenv import load_dotenv

    load_dotenv()
    DIRECTORY = Path(os.getenv("WORKDIR_PATH")) / "expenses"
    parse_unbilled_dolar(
        Path("/Users/nano/Desktop/archidemus.me/jobs/expenses/scraper/dolar.html"),
        DIRECTORY,
    )
