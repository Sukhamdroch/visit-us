const mongooge = require("mongoose")

const cityschema = new mongooge.Schema({
    city_name : { type:String,default:null },
    city_description : {type:String,default:null},
    city_image:{type:String, default:'no-image.jpg'},
    created_at : { type:Date,default:Date.now()}
})

module.exports = new mongooge.model('city',cityschema)