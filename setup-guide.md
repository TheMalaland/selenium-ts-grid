Crear el proyecto y configurar TypeScript.
Instalar las dependencias necesarias.
Configurar Mocha y Selenium.
Escribir un ejemplo de prueba.

1. Crear el proyecto y configurar TypeScript
Ejecuta los siguientes comandos en tu terminal:

# Crear la carpeta del proyecto
mkdir Selenium-mocha-ts-project
cd Selenium-mocha-ts-project

# Inicializar un proyecto Node.js
npm init -y

# Instalar TypeScript y crear el archivo tsconfig.json
npm install typescript --save-dev
npx tsc --init

Esto generará el archivo tsconfig.json. Asegúrate de que tenga configuraciones básicas como estas:

modicar el archivo tsconfig.json dado que ha generado muchos comentarios y debe ser algo como esto

{
  "compilerOptions": {
    "target": "es2016",
    "module": "commonjs",
    "strict": true,
    "esModuleInterop": true,
    "outDir": "./dist",
    "rootDir": "./src"
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules"]
}

2. Instalar dependencias 

npm install mocha @types/mocha chai @types/chai selenium-webdriver @types/selenium-webdriver --save-dev

3. Configurar Mocha con .mocharc.json

touch .mocharc.json

{
  "require": "ts-node/register",
  "spec": "src/tests/**/*.test.ts",
  "timeout": 5000
}

4. crear la estructura del proyecto 

mkdir -p src/tests src/helpers

5. Ejemplo de prueba para chrome src/tests/example.test.ts:

Debe abrior el navegador y buscar selenium

import { Builder, By, until } from "selenium-webdriver";
import { expect } from "chai";

describe("Google Search", function () {
  this.timeout(10000); // Extender el tiempo de espera para pruebas

  it("should search for Selenium", async () => {
    const driver = await new Builder().forBrowser("chrome").build();

    try {
      await driver.get("https://www.google.com");
      const searchBox = await driver.findElement(By.name("q"));
      await searchBox.sendKeys("Selenium");
      await searchBox.submit();

      await driver.wait(until.titleContains("Selenium"), 5000);
      const title = await driver.getTitle();
      expect(title).to.include("Selenium");
    } finally {
      await driver.quit();
    }
  });
});

6. Ejecutar pruebas con

npx mocha

7. Dockerizar y utilizar selenium-grid
Creamos el archivico Dockerfile y docker-compose.yml en el directorio raiz del proyecto

Dockerfile

# Usar una imagen base de Node.js LTS 20
FROM node:20 

# Establecer el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar los archivos del proyecto al contenedor
COPY package*.json ./
COPY tsconfig.json ./
COPY src ./src

# Instalar las dependencias
RUN npm install

# Compilar el proyecto TypeScript
RUN npx tsc

# Comando por defecto para ejecutar las pruebas
CMD ["npx", "mocha"]

docker-compose.yml

version: "3.8"

services:
  selenium-tests:
    build:
      context: .
      dockerfile: Dockerfile
    volumes:
      - .:/app
    depends_on:
      - selenium-hub
    environment:
      - SELENIUM_REMOTE_URL=http://selenium-hub:4444/wd/hub
    command: ["npx", "mocha"]

  selenium-hub:
    image: selenium/hub:4.10.0
    container_name: selenium-hub
    ports:
      - "4444:4444"

  chrome-node:
    image: selenium/node-chrome:4.10.0
    depends_on:
      - selenium-hub
    environment:
      - SE_EVENT_BUS_HOST=selenium-hub
      - SE_EVENT_BUS_PUBLISH_PORT=4442
      - SE_EVENT_BUS_SUBSCRIBE_PORT=4443

8. modificar o crear un nuevo archivo de prueba ejemplo (ex. gridexample.test.ts)

import { Builder, By, until } from "selenium-webdriver";
import { expect } from "chai";

const seleniumGridUrl = process.env.SELENIUM_REMOTE_URL || "http://localhost:4444/wd/hub";

describe("Google Search", function () {
  this.timeout(10000);

  it("should search for Selenium", async () => {
    const driver = await new Builder()
      .usingServer(seleniumGridUrl)
      .forBrowser("chrome")
      .build();

    try {
      await driver.get("https://www.google.com");
      const searchBox = await driver.findElement(By.name("q"));
      await searchBox.sendKeys("Selenium");
      await searchBox.submit();

      await driver.wait(until.titleContains("Selenium"), 5000);
      const title = await driver.getTitle();
      expect(title).to.include("Selenium");
    } finally {
      await driver.quit();
    }
  });
});

9. Contruir el contenedor y ejecutarlo

# Construir la imagen
docker-compose build

# Ejecutar los servicios
docker-compose up


docker exec -it selenium-mocha-ts-project-selenium-tests-1 npm test

docker exec -it selenium-mocha-ts-project-selenium-tests-1 npx mocha -r ts-node/register src/tests/gridexample.test.ts