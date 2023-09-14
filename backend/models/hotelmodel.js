const mongooge = require("mongoose")

const hotelschema = new mongooge.Schema({
    hotel_name : { type:String,default:null },
    hotel_description : { type:String,default:null },
    hotel_image : { type:String,default:null },
    created_at : { type:Date,default:Date.now()}
})

module.exports = new mongooge.model('hotel',hotelschema)