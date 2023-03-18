'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Orders', [{
      gender:1,
      name: 'Vinh',
      email: 'daothevinh@gmail.com',
      phone:'0702686901',
      province:'Phú yen',
      ward:'HT',
      address:'mthtphpy',
      district:'Phú Hòa',
      items:'quan ao',
      note:'nothing',
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
