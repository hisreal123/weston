const { Schema, model } = require("mongoose");

const teamSchema = new Schema({
  name: { type: String, required: true, trim: true },
  position: { type: String, required: true },
  imageUrl: {
    type: String,
    trim: true,
  },
});

const Team = model("Team", teamSchema);
module.exports = Team;

// validate: {
//   validator: function (v) {
//     return /^(ftp|http|https):\/\/[^ "]+$/.test(v);
//   },
//   message: (props) => `${props.value} is not valid URL!`,
// },
