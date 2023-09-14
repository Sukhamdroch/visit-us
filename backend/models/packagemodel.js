const mongooge = require("mongoose")

const packageschema = new mongooge.Schema({
    package_name : { type:String,default:null },
    package_description : {type:String,default:null},
    package_image:{type:String, default:'no-image.jpg'},
    created_at : { type:Date,default:Date.now()}
})

module.exports = new mongooge.model('package', packageschema)