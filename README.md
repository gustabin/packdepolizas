# Pasos para el DEPLOY

## SE ACLARA que esta forma de hacerlo nos es la tipica ni la correcta, solo se trata de hacerlo de acuerdo a como se habia contemplado, sin embargo se recomienda rehacer este proyecto nuevamente como debe ser.

> El repositorio en producción conectado a Azure de Galicia se encuentra
> en https://portal.azure.com/#@galiciaseguros.com.ar/resource/subscriptions/32ef8821-a0f6-4283-8069-0c6840823bf9/resourceGroups/rg-prod-cobertura/providers/Microsoft.Web/sites/static-cobertura/appServices

El recurso es static-cobertura (App Service)

La URL del sitio son:
https://tuscoberturas.galiciaseguros.com.ar/bici
https://tuscoberturas.galiciaseguros.com.ar/hogar
https://tuscoberturas.galiciaseguros.com.ar/pymeintegral

## Comenzando 🚀

### Pre-requisitos 📋

- Tener instalado un editor de código como [Visual Studio Code](https://code.visualstudio.com/).

- [Node.js](https://nodejs.org/es/).

- Instalar [Yarn](https://yarnpkg.com/)

```
npm i -g yarn
```

### Instalación 🔧

_Es importante estar siempre posicionados a través de **Node.js command prompt** en nuestro directorio en donde se encuentra el proyecto._

1. Ejecutar el siguiente comando para instalar dependencias:

```
npm install
```

### Ejecutando el programa 🚗

- Para levantar nuestro proyecto en un entorno de desarrollo ejecutar:

```
npm run dev
```

## Preparación de contenido 📦

- Dependiendo del template que quieren ver, se deben copiar los "JSON".
  (Es decir, nos dirigimos a: Galicia temp\Galicia\src\jsons) Y aqui adentro copiamos los archivos del template el cual queremos visualizar.
- Una vez copiados los pegamos en la carpeta "json". (Galicia temp\Galicia\src\jsons\json).

### Entorno Local 🏠

- Para "construir" nuestro proyecto ejecutamos para cada uno (hogar, pymeintegral, bici)
  OJO = Este proceso se realiza 3 veces.

```
yarn build:dll

yarn build
```

### Instalar filezila

-Credenciales
-path ftps://waws-prod-blu-129.ftp.azurewebsites.windows.net/site/wwwroot
-user static-cobertura\$static-cobertura
-pass (Ver dentro del repositorio en producción del recurso), static-cobertura, opción centro de implementación, credenciales de FTPS, contraseña.

### Copiar archivos

- Copiar todo lo que se encuentra en la carpeta "dist" de la raiz del proyecto a traves de ftp a su correspondiente carpeta:
  -hogar,
  -pymeintegral,
  -bici

❤️ 🛸 👩‍💻 🤖 🐥 ❤️
