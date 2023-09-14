const Transport = require('../models/transportmodel')

function addtransport(req,res){

    console.log(req.body)
    console.log(req.file)
    
    var validation = ""
    if(req.body.transport_name == "")
    {
        validation += "transport name is required \n"
    }
    if(req.body.transport_description == "")
    {
        validation += "Description is required"
    }
    if (req.body.transport_image == "") {
        validation += "transport image is required \n"
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

        let transportobject = new Transport()
        transportobject.transport_name = req.body.transport_name
        transportobject.transport_description = req.body.transport_description
        if(req.file)
        {
            transportobject.transport_image = "transport/"+req.file.filename
        }
        transportobject.save()
        res.json({
            'status':200,
            'success':true,
            'msg':'transport name inserted',
            'data':req.body
        })
    }
    
}

getalltransport = (req,res)=>{
    Transport.find(req.body).exec()
    .then(transportdata=>{
        res.json({
            'status':200,
            'success':true,
            'msg':'data loaded',
            'data':transportdata
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
        Transport.findOne({_id:req.body._id})
        .then(transportdata=>{
            res.json({
                'status':200,
                'success':true,
                'msg':'data loaded',
                'data':transportdata
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
    if(req.body.transport_name == "")
    {
        validation += "transport name is required \n"
    }
    if(req.body.transport_description == "")
    {
        validation += "Description is required"
    }
    if (req.body.transport_image == "") {
        validation += "transport image is required"
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
        Transport.findOne({_id:req.body._id})
        .then(transportdata=>{
            if(transportdata == null)
            {
                res.json({
                    status:409,success:false,msg:'Data not found'
                })
            }
            else{
                //update 
                transportdata.transport_name = req.body.transport_name
                transportdata.transport_description = req.body.transport_description
                transportdata.transport_image = req.body.transport_image
               
                transportdata.save()

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
    addtransport,
    getalltransport,
    getsingle,
    update,
    // deletedata
}