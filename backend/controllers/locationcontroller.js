const Location = require('../models/locationmodel')


function addlocation(req,res){

    console.log(req.body)
    console.log(req.file)
    
    var validation = ""
    if(req.body.location_name == "")
    {
        validation += "Location name is required \n"
    }
    if(req.body.location_description == "")
    {
        validation += "Description is required"
    }
    if(req.body.location_image == "")
    {
        validation += "Image is required"
    }

    if(!!validation)
    {
        res.json({
            status:409,
            success:false,
            msg:validation
        })
    }
    Location.findOne({location_name:req.body.location_name})
    .then(locationdata=>{
        if(locationdata==null){
            let locationobj=new Location()
            locationobj.location_name=req.body.location_name
            locationobj.location_description=req.body.location_description
            if(req.file)
            {
                locationobj.location_image = "location/"+req.file.filename
            }
            locationobj.save()
            res.json({
                status:200,
                success:true,
                msg:"location Inserted"
            })
            
        }
        else{
            res.json({
                status:409,
                success:false,
                msg:"location alreday exists"
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


getalllocation = (req,res)=>{
    Location.find(req.body).exec()
    .then(locationdata=>{
        res.json({
            'status':200,
            'success':true,
            'msg':'data loaded',
            'data':locationdata
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
        Location.findOne({_id:req.body._id})
        .then(locationdata=>{
            res.json({
                'status':200,
                'success':true,
                'msg':'data loaded',
                'data':locationdata
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
    if(req.body._id == "")
    {
        validation += "ID is required \n"
    }
    if(req.body.location_name == "")
    {
        validation += "Location name is required \n"
    }
    if(req.body.location_description == "")
    {
        validation += "Description name is required \n"
    }
    if(req.body.location_image == "")
    {
        validation += "Image is required"
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
        Location.findOne({_id:req.body._id})
        .then(locationdata=>{
            if(locationdata == null)
            {
                res.json({
                    status:409,success:false,msg:'Data not found'
                })
            }
            else{
                //update 
                locationdata.location_name = req.body.location_name
                locationdata.location_description = req.body.location_description
                if(req.file)
                    {
                        locationdata.location_image = "location/"+req.file.filename
                    }
                    locationdata.save()
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
    addlocation,
    getalllocation,
    getsingle,
    update,
    // deletedata
}