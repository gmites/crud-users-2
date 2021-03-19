# Deber 2 CICE: CRUD Users Backend & Frontend

## Objetivo

Desarrollar una API que permita realizar el CRUD (crear, leer, actualizar y eliminar) completo sobre un array de users, utilizando NodeJS y express.

Diseñar e implementar una API para el manejo completo del CRUD (crear, leer, actualizar y eliminar) de usuarios, debe contener los siguientes atributos: name, age y description.

Diseñar e implementar el cliente (frontend) para la manipulación de la data de users utilizando algún framework de JS (Angular, React, Vue, etc) o si lo prefieren JS plano.


## CRUD

#### Create:

Permitirá almacenar un user con los parámetros name, age y dni.
- method: POST
- route: /user
      
#### Read:

Se dividirá en dos rutas: 
- route#0: retornará todos los users almacenados en el arreglo (/users).
- route#1: retornará el user que haga match con el dni que se le envía como parámetro (/users/:id).
- method: GET

#### Update:

Actualizará los datos de un user que haga match con el id enviado como parámetro.
- method: PUT
- route: /user/:id

#### Delete:

Eliminado lógico de un user según el dni que se pase como parámetro.
- method: DELETE
- route: /user/:id

## Herramientas utilizadas:

- NodeJS
- Express
- Nodemon
- Morgan
- Postman
- Angular
