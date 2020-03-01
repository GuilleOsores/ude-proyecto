# ude-proyecto
ude-proyecto

## Juego
Es necesario tener intalado nodejs.
Luego de clonar el repo, abrira la carpeta "proyecto_juego" en una consola e instalar dependencias.
```
npm install
```

Para correrlo
```
npm run dev
```

Va acrear un web server que indicara la url
```
https://localhost:8080/
```

## Backend

### Configuración de Eclipse

Hay que instalar los siguientes elementos del marketplace:

	- Eclipse Java Enterpirse Developer Tools 3.16
	- Eclipse JST Server Adapters (Apache Tomcat, JOnAS, J2EE) Luna
	- Eclipse Web Developer Tools 3.16

Para *crear un servidor* y correr el proyecto:

	- Window -> Show view -> Other... -> Server -> Servers

En la pestaña de servidores que se abre:

	- Click derecho -> New -> Server -> Apache -> Tomcat v9.0 Server
	- Doble click al servidor creado -> Cambiar el valor de Tomcat admin port por otro (ej.: 8081)
	- Guardar

Para publicar el proyecto:

	- Click derecho a la carpeta del proyecto -> Run as -> Run on server -> Seleccionar servidor creado -> Finish

Queda publicado en localhost:8080/backend