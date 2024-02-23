const { Schema, model } = require("mongoose");

const messageSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  phone: {
    type: String,
    required: true,
  },
  message: { type: String, required: true },
});

const Message = model("message", messageSchema);
module.exports = Message;
