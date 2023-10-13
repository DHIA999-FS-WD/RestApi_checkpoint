const { Schema, model } = require("mongoose");
//define a mongoose Schema
const userSchema = new Schema({
  firstName: {
    type: String,
    require: true,
  },
  lastName: {
    type: String,
    require: true,
  },
  age: Number,
});
//export the model
module.exports = User = model("User", userSchema);
