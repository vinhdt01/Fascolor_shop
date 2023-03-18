'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Products', [{
      
    name: 'DataTypes.STRING',
    price:'DataTypes.STRING',
    net_price:'DataTypes.STRING',
    main_photoURL:'DataTypes.STRING',
    sub_photoURL: 'DataTypes.STRING',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
