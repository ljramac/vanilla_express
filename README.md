# VanillaJS Node.js Express & Sequelize PostgreSQL

Este proyecto es una aplicación web simple que utiliza Node.js, Express para el servidor web, Sequelize como ORM para interactuar con PostgreSQL, y sigue el patrón de diseño MVC (Model-View-Controller).

```bash
$ npm i -E express body-parser pg pg-hstore sequelize sequelize-cli
$ npm i -DE nodemon standard
```

### Linting:

```package.json
{
  "eslintConfig": {
      "extends": "standard"
  }
}
```
```settings.json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "eslint.validate": ["javascript"]
}
```
## Sequelize
### init
```bash
$ npx sequelize-cli init
$ createdb -U postgres crud_development
```
### Creacion de un modelo
```bash
$ npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string
```
### Promocionar cambios a la base de datos
```bash
$ npx sequelize-cli db:migrate
```
### Poblar base de datos
```bash
npx sequelize-cli seed:generate --name demo-user
```
Esto generará un archivo en la carpeta seeders con un nombre similar a YYYYMMDDHHmmss-demo-user.js.

#### Escribir el Seeder

```javascript
'use strict';
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@example.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Jane',
        lastName: 'Doe',
        email: 'jane.doe@example.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};

```
Para ejecutar todos los seeders:
```bash
npx sequelize-cli db:seed:all
```
Un seeder específico:
```bash
npx sequelize-cli db:seed --seed nombre-del-seeder.js
```
#### Revertir los seeders

```bash
npx sequelize-cli db:seed:undo
```
Un seeder específico:
```bash
$ npx sequelize-cli db:seed:undo --seed nombre-del-seeder.js
```
Todos los seeders:
```bash
$ npx sequelize-cli db:seed:undo:all
```
### Scaffolding

```
crud/
|-- node_modules/
|-- config/
|   |-- config.json
|-- src/
    |-- models/
    |   |-- index.js
    |   |-- user.js
    |-- routes/
    |   |-- userRoutes.js
    |-- controllers/
    |   |-- userController.js
    |-- app.js
|-- migrations/
|-- seeders/
|-- .sequelizerc
|-- index.js
|-- package.json
```
