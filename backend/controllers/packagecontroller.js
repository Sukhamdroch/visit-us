const Package = require('../models/packagemodel')

function addpackage(req,res){

    console.log(req.body)
    console.log(req.file)
    
    var validation = ""
    if (req.body.package_name == "") {
        validation += "package name is required \n"
    }
    if (req.body.package_description == "") {
        validation += "package Description is required \n"
    }
    if (req.body.package_image == "") {
        validation += "package image is required \n"
    }

    if(!!validation)
    {
        res.json({
            status:409,
            success:false,
            msg:validation
        })
    }
    else{
        Package.findOne({package_name:req.body.package_name})
        .then(packagedata=>{
            if(packagedata==null){
                let packageobj=new Package()
                packageobj.package_name=req.body.package_name
                packageobj.package_description=req.body.package_description
                if(req.file)
                {
                    packageobj.package_image = "package/"+req.file.filename
                }
                packageobj.save()
                res.json({
                    status:200,
                    success:true,
                    msg:"package Inserted"
                })
                
            }
            else{
                res.json({
                    status:409,
                    success:false,
                    msg:"package alreday exists"
                })
            }
        })
        .catch(err=>{
            res.json({
                status:400,
                success:false,
                msg:String(err)
            })
        })
      
    }

}
getallpackage = (req,res)=>{
    Package.find(req.body)
    .then(packagedata=>{
        res.json({
            'status':200,
            'success':true,
            'msg':'data loaded',
            'data':packagedata
        })
    })
    .catch(err=>{
        res.json({
            status:500,
            success:false,
            msg : 'Error Occur',
            error : String(err)
        })
    })
    
}

getsingle = (req,res)=>{
    var validate = ""
    if(req.body._id == "")
    {
        validate += "_id is required"
    }

    if(!!validate)
    {
        res.json({
            status:409,
            success:false,
            msg:validate
        })
    }
    else{
       Package.findOne({_id:req.body._id})
        .then(packagedata=>{
            res.json({
                'status':200,
                'success':true,
                'msg':'data loaded',
                'data':packagedata
            })
        })
        .catch(err=>{
            res.json({
                status:500,
                success:false,
                msg : 'Error Occur',
                error : String(err)
            })
        })
    }
}

update = (req,res)=>{
    var validation = ""
    if (req.body._id == "") {
        validation += "ID is required \n"
    }
    if (req.body.package_name == "") {
        validation += "package name is required \n"
    }
    if (req.body.package_description == "") {
        validation += "package Description is required \n"
    }
    if (req.body.package_image == "") {
        validation += "package image is required \n"
    }

    if(!!validation)
    {
        res.json({
            status:409,
            success:false,
            msg:validation
        })
    }
    else{
        //check whether data exists or not wrt particular id
        Package.findOne({_id:req.body._id})
        .then(packagedata=>{
            if(packagedata == null)
            {
                res.json({
                    status:409,success:false,msg:'Data not found'
                })
            }
            else{
                //update 
                packagedata.package_name = req.body.package_name
                packagedata.package_description = req.body.package_description
                if(req.file)
                {
                    packagedata.package_image = "package/"+req.file.filename
                }
                packagedata.save()

                res.json({
                    status:200,success:true,msg:'Record updated'
                })
            }
        })
        .catch(err=>{
            res.json({
                status:500,
                success:false,
                msg:'Error',
                error:String(err)
            })
        }) 
    }
}
module.exports = {
    addpackage,
    getallpackage,
    getsingle,
    update,
    // deletedata
}