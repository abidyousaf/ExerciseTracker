const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    name:String,
    activity:String,
    weight:Number,
    minutes:Number,
    date:String,
    discription:String,
   user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Signup' }
})
let User = mongoose.model('Activity', userSchema);
module.exports = User;