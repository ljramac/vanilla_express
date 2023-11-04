'use strict'

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
      }
    ], {})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {})
  }
}
