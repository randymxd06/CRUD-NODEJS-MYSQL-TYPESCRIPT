## Guia de comandos y archivos importantes para que la app funcione

En dado cado de que la app le falte algun archivo o algo, les dejo estos comandos para que puedan ser capaces de crear su propio crud desde 0 usando estos archivos y comandos como referencia para crear el suyo.

```
npm i -g typescript
```

Este comando es para instalar typescript de manera global en el sistema para poder utilizar este comando se debe abrir una terminal como administrador.

```
npm init -y
```

Este comando le genera el archivo ``` package.json ``` en dado caso de que no lo tengamos, nos creara algo similar a lo siguiente:

```
{
    "name": "crud-node-js",
    "version": "1.0.0",
    "description": "",
    "main": "index.js",
    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1"
    },
    "keywords": [],
    "author": "",
    "licence": "ISC"
}
```

Debemos compilar nuestros archivos de typescript a javascript utilizando el comando:

```
tsc --init
```

Este comando crea el archivo ``` tsconfig.json ```

Dentro de este archivo debemos de verificar que tengamos las siguiente lineas tal cual como lo voy a mostrar en las siguientes lineas:

```
"target": "es6",
```

```
"module": "commonjs", 
```

```
"moduleResolution": "node",
```

```
"sourceMap": true, 
```

```
"outDir": "./dist",
```

```
"esModuleInterop": true,
```

```
"forceConsistentCasingInFileNames": true,
```

```
"strict": true,
```

```
"skipLibCheck": true
```

Si en dado caso no tiene las lineas de codigo anteriores descomentadas y tal cual se las mostre entonces hagalo porque es importante para el funcionamiento del servidor.

Para compilar el codigo de typescript a javascript usamos el comando:

```
tsc
```

Para poner a correr nuestro servidor debemos de ejecutar el comando:

```
node dist/app.js
```

Debemos de instalar ``` tslint ``` utilizando el siguiente comando:

```
npm i tslint --save-dev
```

Debemos de instalar typescript local osea en nuestro proyecto usando el comando:

```
npm i typescript --save-dev
```

Debemos de inicializar el ``` tslint ``` usando el siguiente comando:

```
./node_modules/.bin/tslint --init
```

Esto nos genera un archivo ```tslint.json``` que debemos de ponerle lo siguiente en las reglas:

```
{
    "defaultSeverity": "error",
    "extends": [
        "tslint:recommended"
    ],
    "jsRules": {},
    "rules": {
        "no-console": false
    },
    "rulesDirectory": []
}
```

Adicionalmente debemos de instalar las dependencias de express, cors y dotenv usando el comando:

```
npm i express cors dotenv
```

Para que funcione con typescript debemos de usar el comando:

```
npm i --save-dev @types/express
```

Adicional para que cors funcione con typescript debemos de usar el siguiente comando:

```
npm i --save-dev @types/cors
```

Debemos de crear un archivo ``` .env ```para declarar las variables de entorno, por ahora solo lo uso para definirle el puerto.

```
PORT=8000
```

Para correr la app con nodemon debemos de instalarlo usando el siguiente comando:

```
npm i nodemon
```

Debemos de agregar los siguientes scripts en el archivo ``` package.json ``` para que podamos correr la app con nodemon.

```
"scripts": {
    "dev": "nodemon ./dist/app.js",
    "ts": "tsc --watch",
    "test": "echo \"Error: no test specified\" && exit 1"
},
```

Para poner que typescript este en modo de observador para que este atento a los cambios y compile y traduzca el codigo de typescript a javascript debemos de utilizar el siguiente comando (se recomienda utilizar este comando en una terminal aparte de la que corre el servidor).

```
tsc --watch
```

Instalamos sequelize para poder manipular nuestra base de datos para eso debemos utilizar el siguiente comando:

```
npm install --save sequelize
```

En mi caso voy a trabajar con mysql por eso aparte debemos de utilizar el siguiente comando:

```
npm install --save mysql2
```

Pero hay mas comandos para diferentes bases de datos como pueden ser:

``` PostgreeSQL ```
```
npm install --save pg ph-hstore
```

``` MariaDB ```
```
npm install --save mariadb
```

``` SQLite ```
```
npm install --save sqlite3
```

``` Microsoft SQL Server ```
```
npm install --save tedious
```

Por ahora eso es todo en cuanto a instalaciones.

## Como bajar el proyecto de github y probarlo?

Para probar este crud primero debemos de bajar el repositorio usando el siguiente comando:

```
git clone url_del_repositorio
```

Luego abren una terminal y se ubican en la carpeta del proyecto, posteriormente hay que descargar todas las dependencias necesarias para que el proyecto funcione, para esto utilizamos el siguiente comando:

```
npm install
```

Se recomienda que se actualicen los paquetes, por si existe algun paquete que ya no existe ```[deprecated]```

```
npm update
```

Luesgo toman el archivo ```.env.exampe``` copian lo pegan y le cambian el nombre a la copia por ```.env``` y le definen el puerto.

```
PORT=8000
```

Otra cosa importante es irse al archivo de la conexion con la base de datos y definirle el nombre de la base de datos, usuario y contraseña, este archivo esta en la ruta: ```database/connection.ts``` su contenido es el siguiente:

```
import { Sequelize } from "sequelize";

// Sequelize('nombre_basededatos', 'nombre_usuario', 'contraseña') //
const db = new Sequelize('prueba-node', 'root', '123456789', {
    host: 'localhost',
    dialect: 'mysql',
    // logging: false
    // define: {
    //     timestamps: false
    // }
});

export default db;
```

Y por ultimo solo es correr los comandos en dos terminales diferentes y probar en postman con los endpoint que se definieron:

```
nodemon dist/app.js
```

```
tsc --watch
```

Url base de los endpoints:

```
http://localhost:8000/api/usuarios
```