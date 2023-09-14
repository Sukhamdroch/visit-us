const jwt = require('jsonwebtoken')
const secretkey = "sukham@26"

module.exports = (req,res,next)=>{
    token = req.headers['authorization']
    console.log(token)
    jwt.verify(token,secretkey,(err,data)=>{
        if(err)
        {
            res.json({
                status:401,success:false,msg:'Unauthenicated user'
            })
        }
        else{
            next()
        }
    })
}