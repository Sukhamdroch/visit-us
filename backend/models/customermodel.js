const mongoose = require("mongoose")

const customerschema = new mongoose.Schema({
    name : {type:String,default:null},
    email : {type:String,default:null},
    password : {type:String,default:null},
    contact : {type:Number,default:0},
    address : {type:String,default:null},
    userId : {type:mongoose.SchemaTypes.ObjectId,ref:'user',default:null},
    created_at : {type:Date,default:Date.now()},
    status : { type:Boolean,default:true}
})

module.exports = new mongoose.model('customer',customerschema)