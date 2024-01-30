# VanillaJS + Express + Sequelize (PostgreSQL)

This project is a simple web application that uses Node.js, Express for the web server, Sequelize as an ORM to interact with PostgreSQL, and follows the MVC (Model-View-Controller) design pattern.

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
### Creating a Model
```bash
$ npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string
```
### Promoting Changes to the Database
```bash
$ npx sequelize-cli db:migrate
```
### Populating the Database
```bash
npx sequelize-cli seed:generate --name demo-user
```
This will generate a file in the seeders folder with a name similar to YYYYMMDDHHmmss-demo-user.js.

#### Writing the Seeder

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
To run all seeders:
```bash
npx sequelize-cli db:seed:all
```
A specific seeder:
```bash
npx sequelize-cli db:seed --seed nombre-del-seeder.js
```
#### Reverting the Seeders

```bash
npx sequelize-cli db:seed:undo
```
A specific seeder:
```bash
$ npx sequelize-cli db:seed:undo --seed nombre-del-seeder.js
```
All seeders:
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
