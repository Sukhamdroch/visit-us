const User = require('../models/usermodel')
const bcrypt = require('bcrypt')
const saltround = 10

exports.adminseeder = (req,res)=>{
    User.findOne({email:'admin@gmail.com'})
    .then(userdata=>{
        if(userdata == null){
            //insert
            let userobj = new User()
            userobj.email = 'admin@gmail.com'
            userobj.password = bcrypt.hashSync("123",saltround)
            userobj.name = "Admin"
            userobj.userType = 1
            userobj.save()
            console.log("Admin registered")
        }
        else{
            console.log('admin already exists')
        }
    })
}