# Scraper base con Selenium
# Utiliza XPaths para rellenar formularios y dotenv para variables de entorno

import os
from datetime import datetime
import time
import sys
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import TimeoutException
from webdriver_manager.chrome import ChromeDriverManager
from dotenv import load_dotenv
from parse_unbilled import parse_unbilled
from pathlib import Path

# Cargar variables de entorno desde archivo .env
load_dotenv()


class SantanderScraper:
    def __init__(self, headless=True):
        """
        Inicializa el scraper con Selenium

        Args:
            headless (bool): Si se ejecuta en modo headless (sin interfaz gráfica)
        """
        # Configurar opciones de Chrome
        chrome_options = Options()
        if headless:
            chrome_options.add_argument("--headless")

        chrome_options.add_argument("--no-sandbox")
        chrome_options.add_argument("--disable-dev-shm-usage")
        chrome_options.add_argument("--disable-gpu")
        chrome_options.add_argument("--window-size=1920,1080")
        # QUe no detecte que es un bot
        chrome_options.add_argument("--disable-blink-features=AutomationControlled")
        chrome_options.add_experimental_option("excludeSwitches", ["enable-automation"])
        chrome_options.add_experimental_option("useAutomationExtension", False)
        chrome_options.add_experimental_option(
            "prefs", {"profile.default_content_setting_values.notifications": 2}
        )
        chrome_options.add_argument(
            "--user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3"
        )
        self.workdir = Path(os.getenv("WORKDIR_PATH")) / "expenses"

        # Inicializar el driver
        self.driver = webdriver.Chrome(
            service=Service(ChromeDriverManager().install()), options=chrome_options
        )

        # Configurar el tiempo de espera predeterminado
        self.wait = WebDriverWait(self.driver, 10)

    def get_credentials(self):
        """
        Obtiene credenciales desde variables de entorno

        Returns:
            dict: Diccionario con las credenciales
        """
        return {
            "username": os.getenv("USERNAME"),
            "password": os.getenv("PASSWORD"),
            "url": os.getenv("TARGET_URL"),
        }

    def navigate_to(self, url=None):
        """
        Navega a una URL específica

        Args:
            url (str, optional): URL a la que navegar. Si es None, usa la URL de las credenciales.
        """
        if url is None:
            url = self.get_credentials()["url"]

        self.driver.get(url)
        print(f"Navegando a: {url}")

    def fill_form_field(self, xpath, value, clear=True):
        """
        Rellena un campo de formulario identificado por XPath

        Args:
            xpath (str): XPath del elemento
            value (str): Valor a introducir
            clear (bool): Si se debe borrar el campo antes de rellenar
        """
        try:
            element = self.wait.until(EC.presence_of_element_located((By.XPATH, xpath)))
            element = self.wait.until(EC.element_to_be_clickable((By.XPATH, xpath)))

            if clear:
                element.clear()

            element.send_keys(value)
            print(f"Campo completado: {xpath}")
            return True
        except TimeoutException:
            print(f"Error: Tiempo de espera excedido para el campo: {xpath}")
            return False
        except Exception as e:
            print(f"Error al rellenar el campo {xpath}: {str(e)}")
            return False

    def click_element(self, xpath):
        """
        Hace clic en un elemento identificado por XPath

        Args:
            xpath (str): XPath del elemento
        """
        try:
            element = self.wait.until(EC.element_to_be_clickable((By.XPATH, xpath)))
            element.click()
            print(f"Clic en elemento: {xpath}")
            return True
        except TimeoutException:
            print(f"Error: Tiempo de espera excedido para el clic en: {xpath}")
            return False
        except Exception as e:
            print(f"Error al hacer clic en {xpath}: {str(e)}")
            return False

    def wait_for_element(self, xpath, timeout=10):
        """
        Espera a que un elemento esté presente

        Args:
            xpath (str): XPath del elemento
            timeout (int): Tiempo máximo de espera en segundos
        """
        try:
            custom_wait = WebDriverWait(self.driver, timeout)
            element = custom_wait.until(
                EC.presence_of_element_located((By.XPATH, xpath))
            )
            return element
        except TimeoutException:
            print(f"Error: Tiempo de espera excedido para elemento: {xpath}")
            return None

    def login(self):
        """
        Realiza el inicio de sesión con las credenciales de las variables de entorno
        """

        # Esperar a que el botón esté presente y hacer clic
        login_button_xpath = '//*[@id="btnIngresar"]'
        scraper.wait_for_element(login_button_xpath)
        scraper.click_element(login_button_xpath)

        # Esperar a que se cargue el panel de login en un iframe
        iframe_xpath = '//*[@id="login-frame"]'
        scraper.wait_for_element(iframe_xpath)
        scraper.driver.switch_to.frame(scraper.wait_for_element(iframe_xpath))
        print("Cargado el iframe de login")
        # Esperar a que los campos de usuario y contraseña estén presentes
        username_xpath = '//*[@id="rut"]'
        password_xpath = '//*[@id="pass"]'
        submit_xpath = '//*[@type="submit"]'
        scraper.wait_for_element(username_xpath)
        scraper.wait_for_element(password_xpath)
        scraper.wait_for_element(submit_xpath)

        # Obtengo credenciales
        credentials = self.get_credentials()
        # Rellenar formulario y envíop
        self.fill_form_field(username_xpath, credentials["username"])
        self.fill_form_field(password_xpath, credentials["password"])
        time.sleep(1)
        self.click_element(submit_xpath)
        time.sleep(5)
        # Asumo login

    def get_TC(self):
        """
        Obtiene lista de elementos que llevana  los movimientos de las tarjetas de crédito
        Returns:
            tcs_elements (list): Lista de elementos que llevan los movimientos de las tarjetas de crédito
        """

        main_tc_unbilled_url = "https://mibanco.santander.cl/UI.Web.HB/Private_new/frame/#/private/Saldos_TC/main/bill"
        main_tc_billed_url = "https://mibanco.santander.cl/UI.Web.HB/Private_new/frame/#/private/Saldos_TC/main/billed"

        # Obtener fecha y timestamp actual
        now = datetime.now()
        date_str = now.strftime("%Y%m%d")
        timestamp = now.strftime("%H%M%S")

        # Obtener HTML de movimientos sin facturar
        self.driver.get(main_tc_unbilled_url)
        time.sleep(6)  # Esperar a que cargue la página
        unbilled_html = self.driver.page_source
        parse_unbilled(unbilled_html, self.workdir)

        # Obtener HTML de movimientos facturados
        # self.driver.get(main_tc_billed_url)
        # time.sleep(6)  # Esperar a que cargue la página
        # billed_html = self.driver.page_source
        # billed_filename = f"tc_billed_{date_str}_{timestamp}.txt"
        # with open(billed_filename, "w", encoding="utf-8") as f:
        #     f.write(billed_html)
        # print(f"HTML de movimientos facturados guardado en {billed_filename}")

    def close(self):
        """Cierra el navegador"""
        if self.driver:
            self.driver.quit()
            print("Navegador cerrado")


# Ejemplo de uso
if __name__ == "__main__":
    # Crear el scraper
    scraper = SantanderScraper(headless=False)

    try:
        # Navegar a la URL objetivo
        scraper.navigate_to()
        scraper.login()
        scraper.get_TC()

    except Exception as e:
        print(f"Error en la ejecución: {str(e)}")

    finally:
        # Cerrar el navegador
        scraper.close()
