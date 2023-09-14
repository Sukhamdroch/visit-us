const mongooge = require("mongoose")

const transportschema = new mongooge.Schema({
    transport_name : { type:String,default:null },
    transport_description : { type:String,default:null },
    transport_image:{type:String, default:'no-image.jpg'},
    created_at: { type: Date, default: Date.now() }
})

module.exports = new mongooge.model('transport', transportschema)