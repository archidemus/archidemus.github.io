#!/bin/bash

set -e

# Configura tu carpeta y repositorio
PROJECT_DIR="/ruta/a/tu/carpeta/proyecto"
REPO_URL="git@github.com:usuario/repositorio.git"

# Crear carpeta si no existe
if [ ! -d "$PROJECT_DIR" ]; then
    echo "Creando carpeta del proyecto en $PROJECT_DIR"
    mkdir -p "$PROJECT_DIR"
fi

cd "$PROJECT_DIR" || exit

# Hacer git pull o clonar si la carpeta está vacía
if [ -d ".git" ]; then
    echo "Actualizando repositorio..."
    git pull
else
    echo "Clonando repositorio..."
    git clone "$REPO_URL" .
fi

# Leer la versión de Python desde pyproject.toml
PY_VERSION=$(grep -Po '(?<=python = ")[^"]+' pyproject.toml | head -n 1)

if [ -z "$PY_VERSION" ]; then
    echo "❌ No se encontró la versión de Python en pyproject.toml"
    exit 1
fi

echo "Versión requerida de Python: $PY_VERSION"

# Instalar pyenv si no está instalado
if ! command -v pyenv &> /dev/null; then
    echo "Instalando pyenv..."
    curl https://pyenv.run | bash

    # Configurar entorno para pyenv
    export PATH="$HOME/.pyenv/bin:$PATH"
    eval "$(pyenv init -)"
    eval "$(pyenv virtualenv-init -)"
else
    echo "pyenv ya está instalado."
    export PATH="$HOME/.pyenv/bin:$PATH"
    eval "$(pyenv init -)"
    eval "$(pyenv virtualenv-init -)"
fi

# Instalar versión requerida de Python si no existe
if ! pyenv versions --bare | grep -qx "$PY_VERSION"; then
    echo "Instalando Python $PY_VERSION con pyenv..."
    pyenv install "$PY_VERSION"
fi

pyenv local "$PY_VERSION"

# Verificar si Poetry está instalado
if ! command -v poetry &> /dev/null; then
    echo "Poetry no está instalado. Instalando Poetry..."
    curl -sSL https://install.python-poetry.org | python3 -
    export PATH="$HOME/.local/bin:$PATH"
else
    echo "Poetry ya está instalado."
fi

# Instalar dependencias con poetry
echo "Instalando dependencias del proyecto con Poetry..."
poetry install

# Ejecutar script Python
echo "Ejecutando get_transactions.py..."
poetry run python get_transactions.py