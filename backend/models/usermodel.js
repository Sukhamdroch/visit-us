const mongoose = require("mongoose")

const userschema = new mongoose.Schema({
    name : {type:String,default:null},
    email : {type:String,default:null},
    password : {type:String,default:null},
    userType : {type:Number,default:2}, //1= admin, 2=customer
    created_at : {type:Date,default:Date.now()},
    status : { type:Boolean,default:true}
})

module.exports = new mongoose.model('user',userschema)