'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.addColumn('consultations', 'doctorId', {
      type: Sequelize.INTEGER,
      references: {
        model: 'doctors',
        key: 'id'
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.removeColumn('consultations', "doctorId")

  }
};