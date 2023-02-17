const mongoose = require("mongoose");
const { Schema } = mongoose;
const my_Project = Schema({
  id: Schema.Types.ObjectId,
  name: { type: String, required: true },
  email: { type: String, unique: true },
  password: {
    type: String,
    required: true,
  },
 // password_confirmation:String
});

const Signup = mongoose.model("Signup", my_Project);
module.exports = Signup;