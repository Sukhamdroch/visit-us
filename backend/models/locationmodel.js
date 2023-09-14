const mongooge = require("mongoose")

const locationschema = new mongooge.Schema({
    location_name : { type:String,default:null },
    location_description : { type:String,default:null },    
    location_image : {type:String,default:'no-image.jgp'},
    created_at : { type:Date,default:Date.now()}
})

module.exports = new mongooge.model('location',locationschema)