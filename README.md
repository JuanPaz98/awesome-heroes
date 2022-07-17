##Awesome Heroes

Requerimientos para que la aplicación funcione correctamente:

- Correr el comando "ng serve" para inicializar angular, el cual se ejecutará en la ruta http://localhost:4200/

- el backend está simulado a través de Json server y se encuentra en formato Json, funcionando como API Rest. El script para ejecutarlo es "npm serverAPI" y se ejecutará en http://localhost:3000/.

###Características de la Aplicación

Aplicación para la votación de tus superheroes favoritos!!

La aplicación se encuentra desarrollada enteramente en angular y las habilidades que se aplicaron fueron las siguientes:
- Creación de componentes
- Comunicación entre componentes a traves del Decorador Input y servicios
- Creación de API con Json-server
- Implementación del módulo HttpClient para el consumo de la API donde se encontraban los datos en formato Json
- Persistencia de información (votos) a través de los Update a la API
- Creacion de Interface para tipar y recibir correctamente la información de la API 
- Inyeccion de dependencias para consumo de servicios desde los diferentes componentes
- Maquetación totalmente en scss con manejo de sus propiedades de posición y manejo de flexbox y grid
- Creación de barra de votación dinámica, la cual se actualiza con base en el número de votos del superheroe.
- Implementación de directivas como ngIf y ngFor para la renderización condicional de los elementos o componentes
- Control de versiones con git

####Pendientes

- Generar los media-queries para hacerlo responsive y adaptarlo a los diferentes dispositivos(móvil, tablet), por falta de tiempo. 