# multiplication-app-ts

Bienvenido a **multiplication-app-ts**, una aplicación de consola desarrollada con Node.js y TypeScript que te permite generar tablas de multiplicar de forma sencilla. La aplicación utiliza la biblioteca `yargs` para manejar los argumentos de la línea de comandos.

## Instalación

Para comenzar a utilizar la aplicación, sigue estos pasos:

1. Clona o descarga este repositorio en tu máquina local.

2. Navega al directorio del proyecto.

3. Instala las dependencias utilizando npm.

    ```bash
    npm install
    ```

## Uso

Una vez que hayas instalado las dependencias, puedes ejecutar la aplicación con el siguiente comando:

```bash
npx ts-node src/app -b [base] -l [limit] -s [show] -n [name] -d [destination]

## Opciones

- --help: Muestra la ayuda.
- --version: Muestra el número de versión.
- -b, --base: Es la base de la tabla de multiplicar (número, requerido).
- -l, --limit: Es el límite de la tabla de multiplicar (número, por defecto: 10).
- -s, --show: Muestra la tabla en consola (booleano, por defecto: false).
- -n, --name: Nombre del archivo (cadena de caracteres, por defecto: "multiplication-table").
- -d, --destination: Destino del archivo (cadena de caracteres, por defecto: "").
```

## Ejemplo

Generar una tabla de multiplicar con base 5, límite 12, mostrar en consola y guardar en un archivo llamado "mi-tabla" en la carpeta "resultados":

```bash
npx ts-node src/app -b 5 -l 12 -s -n mi-tabla -d resultados
```

## Pruebas
Para ejecutar las pruebas unitarias, utiliza el siguiente comando:

```bash
npm run test:watch
