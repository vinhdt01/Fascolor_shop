const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema(
  {
    name: {
      type: "string",
      required: true,
    },
    price: {
      type: "string",
      required: true,
    },
    net_price: {
      type: "string",
      required: true,
    },
    main_photoURL: {
      type: "string",
      required: true,
    },
    sub_photoURL: {
      type: "string",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("product", schema);