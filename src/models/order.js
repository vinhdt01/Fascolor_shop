'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Order.init({
    gender:DataTypes.BOOLEAN,
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    phone:DataTypes.STRING,
    province:DataTypes.STRING,
    ward:DataTypes.STRING,
    address:DataTypes.STRING,
    base_amount:Datatypes.STRING,
    district:DataTypes.STRING,
    items:DataTypes.STRING,
    note:DataTypes.STRING,

  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};