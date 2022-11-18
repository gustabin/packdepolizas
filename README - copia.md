> El repositorio en producción conectado a Azure de Galicia se encuentra [aquí](https://github.com/Ramon-Chozas-SA/galicia-produccion)
# Galicia Documentos Dinamicos

Template generico para la creación "automatica" de documentos dinamicos de Galicia.

## Comenzando 🚀

### Pre-requisitos 📋

* Tener instalado un editor de código como [Visual Studio Code](https://code.visualstudio.com/) para poder hacer cualquier modificacion al proyecto de forma ágil.

* [Node.js](https://nodejs.org/es/) para poder ejecutar el codigo javascript en nuestra computadora/servidor.

* *Requisito exlusivo* para poner en producción el proyecto en la nube de Azure (Aun que no realmente necesario), es [Git Bash](https://git-scm.com/) y es "necesario" para clonar el [repositorio en producción](https://github.com/Ramon-Chozas-SA/galicia-produccion) que se relaciona con la nube. Una vez instalado "Git Bash", crearemos una nueva carpeta donde contendra los archivos de producción de Galicia y ejecutamos la siguientes secuencia de comandos:
```
git init
// Fijarse de estar en la rama "main"

git remote add origin https://github.com/Ramon-Chozas-SA/galicia-produccion

git pull origin main
// Posible error que pueda llegar a ocurrir es de autorizacion, fijarse de tener bien las credenciales de github y los permisos para poder traer los archivos.
```

* Recomendación: Instalar [Yarn](https://yarnpkg.com/), a través de **Node.js command prompt**, de forma global para instalar dependencias a menos que decida usar npm:
```
npm i -g yarn
```

### Instalación 🔧

_Es importante estar siempre posicionados a través de **Node.js command prompt** en nuestro directorio en donde se encuentra el proyecto._

1. Ejecutar el siguiente comando para instalar dependencias:
```
yarn
```

### Ejecutando el programa 🚗

* Para levantar nuestro proyecto en un entorno de desarrollo ejecutar:
```
yarn dev
```

## Despliegue 📦

### Entorno Local 🏠

* Para "construir" nuestro proyecto ejecutamos:
```
yarn build:dll

yarn build
```

* Y luego abrir el html que se encuentra en la carpeta "dist" de la raiz del proyecto

### Entorno Windows Server 🏢

1. Nuestro proyecto debera estar colocado en unos de los directorios de Windows Server en donde este apuntando el IIS para levantar las paginas web y debera ser convertido como una "Aplicación" de IIS (Esto se hace desde IIS, a la izquierda se ve los directorios, se le hace click derecho a el directorio de nuestro proyecto y le damos a "convertir en aplicación").

2. Una vez instaladas las dependencias (_Ver "Instalación"_) se hará el deploy mediante:
```
yarn build:dll

yarn build
```

4. Copiar el archivo html en la carpeta "dist" y ponerlo en la raiz del proyecto.

### Entorno Azure ⛅

1. Una vez instaladas las dependencias (_Ver "Instalación"_) se hará el deploy mediante:
```
yarn build:dll

yarn build
```

2. Luego copiar los archivos de la carpeta "dist" que se encuentra en la raiz del proyecto y pegarlos en una nueva carpeta o reemplazando una carpeta existente en donde tengamos nuestro directorio clonado de [este repositorio](https://github.com/Ramon-Chozas-SA/galicia-produccion).

3. Abrir [Git Bash](https://git-scm.com/) en este directorio clonado y ejecutar:
```
git add .

git commit -m "[INSERTAR INFORMACIÓN PARA INFROMAR QUE CAMBIOS SE HICIERON]"

git push origin main

// ¡Listo! Automaticamente si no hay ningun error debería estar desplegandose en la nube
```

## Construido con 🛠️

* [Node.js](https://nodejs.org/es/) - Entorno de ejecución
* [Yarn](https://yarnpkg.com/) - Manejador de dependencias
* [React](https://es.reactjs.org/) - Framework de JavaScript
* [Tailwindcss](https://tailwindcss.com/) - CSS framework
* [PostCSS](https://postcss.org/) - Preprocesador CSS
* [Webpack](https://www.webpack.com.ar/) - Empaquetador de Modulos

## Versionado 📌

Para todas las versiones disponibles, mira los [tags en este repositorio](https://github.com/Ramon-Chozas-SA/Galicia/tags).

❤️ 🛸 👩‍💻 🤖 🐥 ❤️
