> El repositorio en producci贸n conectado a Azure de Galicia se encuentra [aqu铆](https://github.com/Ramon-Chozas-SA/galicia-produccion)
# Galicia Documentos Dinamicos

Template generico para la creaci贸n "automatica" de documentos dinamicos de Galicia.

## Comenzando 馃殌

### Pre-requisitos 馃搵

* Tener instalado un editor de c贸digo como [Visual Studio Code](https://code.visualstudio.com/) para poder hacer cualquier modificacion al proyecto de forma 谩gil.

* [Node.js](https://nodejs.org/es/) para poder ejecutar el codigo javascript en nuestra computadora/servidor.

* *Requisito exlusivo* para poner en producci贸n el proyecto en la nube de Azure (Aun que no realmente necesario), es [Git Bash](https://git-scm.com/) y es "necesario" para clonar el [repositorio en producci贸n](https://github.com/Ramon-Chozas-SA/galicia-produccion) que se relaciona con la nube. Una vez instalado "Git Bash", crearemos una nueva carpeta donde contendra los archivos de producci贸n de Galicia y ejecutamos la siguientes secuencia de comandos:
```
git init
// Fijarse de estar en la rama "main"

git remote add origin https://github.com/Ramon-Chozas-SA/galicia-produccion

git pull origin main
// Posible error que pueda llegar a ocurrir es de autorizacion, fijarse de tener bien las credenciales de github y los permisos para poder traer los archivos.
```

* Recomendaci贸n: Instalar [Yarn](https://yarnpkg.com/), a trav茅s de **Node.js command prompt**, de forma global para instalar dependencias a menos que decida usar npm:
```
npm i -g yarn
```

### Instalaci贸n 馃敡

_Es importante estar siempre posicionados a trav茅s de **Node.js command prompt** en nuestro directorio en donde se encuentra el proyecto._

1. Ejecutar el siguiente comando para instalar dependencias:
```
yarn
```

### Ejecutando el programa 馃殫

* Para levantar nuestro proyecto en un entorno de desarrollo ejecutar:
```
yarn dev
```

## Despliegue 馃摝

### Entorno Local 馃彔

* Para "construir" nuestro proyecto ejecutamos:
```
yarn build:dll

yarn build
```

* Y luego abrir el html que se encuentra en la carpeta "dist" de la raiz del proyecto

### Entorno Windows Server 馃彚

1. Nuestro proyecto debera estar colocado en unos de los directorios de Windows Server en donde este apuntando el IIS para levantar las paginas web y debera ser convertido como una "Aplicaci贸n" de IIS (Esto se hace desde IIS, a la izquierda se ve los directorios, se le hace click derecho a el directorio de nuestro proyecto y le damos a "convertir en aplicaci贸n").

2. Una vez instaladas las dependencias (_Ver "Instalaci贸n"_) se har谩 el deploy mediante:
```
yarn build:dll

yarn build
```

4. Copiar el archivo html en la carpeta "dist" y ponerlo en la raiz del proyecto.

### Entorno Azure 鉀?

1. Una vez instaladas las dependencias (_Ver "Instalaci贸n"_) se har谩 el deploy mediante:
```
yarn build:dll

yarn build
```

2. Luego copiar los archivos de la carpeta "dist" que se encuentra en la raiz del proyecto y pegarlos en una nueva carpeta o reemplazando una carpeta existente en donde tengamos nuestro directorio clonado de [este repositorio](https://github.com/Ramon-Chozas-SA/galicia-produccion).

3. Abrir [Git Bash](https://git-scm.com/) en este directorio clonado y ejecutar:
```
git add .

git commit -m "[INSERTAR INFORMACI脫N PARA INFROMAR QUE CAMBIOS SE HICIERON]"

git push origin main

// 隆Listo! Automaticamente si no hay ningun error deber铆a estar desplegandose en la nube
```

## Construido con 馃洜锔?

* [Node.js](https://nodejs.org/es/) - Entorno de ejecuci贸n
* [Yarn](https://yarnpkg.com/) - Manejador de dependencias
* [React](https://es.reactjs.org/) - Framework de JavaScript
* [Tailwindcss](https://tailwindcss.com/) - CSS framework
* [PostCSS](https://postcss.org/) - Preprocesador CSS
* [Webpack](https://www.webpack.com.ar/) - Empaquetador de Modulos

## Versionado 馃搶

Para todas las versiones disponibles, mira los [tags en este repositorio](https://github.com/Ramon-Chozas-SA/Galicia/tags).

鉂わ笍 馃浉 馃懇鈥嶐煉? 馃 馃惀 鉂わ笍
