const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema(
  {
    orderId:{
      type:"string",
      require:true
    },
    paymentStatus:{
      type:"string",
      required: false,
      default: 'initial'

    },
    paymentMethod:{
      type:"string",
      required: false,
      default: 'unknowed'

    },
    gender: {
        type: "boolean",
        required: true,
      },
    name: {
      type: "string",
      required: true,
    },
    phone: {
      type: "string",
      required: true,
    },
    birthday: {
      type: "Date",
      required: true,
    },
    province: {
      type: "string",
      required: true,
    },
    ward: {
      type: "string",
      required: true,
    },
    district: {
      type: "string",
      required: true,
    },
    address: {
        type: "string",
        required: true,
      },
      base_amount:{
        type: "string",
        required: true,
      },  
      items: {
        type: "string",
        required: true,
      },
      status: {
        type: "string",
      }
  },
  {
    timestamps: true,
    paymentStatus: true,
    paymentMethod: true
  }
);

module.exports = mongoose.model("order", schema);