const Hotel = require('../models/hotelmodel')

function addhotel(req,res){

    console.log(req.body)
    console.log(req.file)
    
    var validation = ""
    if(req.body.hotel_name == "")
    {
        validation += "hotel name is required \n"
    }
    if(req.body.hotel_description == "")
    {
        validation += "hotel description is required \n"
    }
    if(req.body.hotel_image == "")
    {
        validation += "hotel image is required "
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

        let hoteldata = new Hotel()
        hoteldata.hotel_name = req.body.hotel_name
        hoteldata.hotel_description = req.body.hotel_description
        if(req.file)
        {
            hoteldata.hotel_image = "hotel/"+req.file.filename
        }
        hoteldata.save()
        res.json({
            'status':200,
            'success':true,
            'msg':'hotel inserted',
            'data':req.body
        })

    }
}

getallhotel = (req,res)=>{
    Hotel.find(req.body).exec()
    .then(hoteldata=>{
        res.json({
            'status':200,
            'success':true,
            'msg':'data loaded',
            'data':hoteldata
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
        Hotel.findOne({_id:req.body._id})
        .then(hoteldata=>{
            res.json({
                'status':200,
                'success':true,
                'msg':'data loaded',
                'data':hoteldata
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
    if(req.body.hotel_name == "")
    {
        validation += "hotel name is required \n"
    }
    if(req.body.hotel_description == "")
    {
        validation += "hotel description is required"
    }
    if(req.body.hotel_image == "")
    {
        validation += "hotel image is required"
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
        Hotel.findOne({_id:req.body._id})
        .then(hoteldata=>{
            if(hoteldata == null)
            {
                res.json({
                    status:409,success:false,msg:'Data not found'
                })
            }
            else{
                //update 
                hoteldata.hotel_name = req.body.hotel_name
                hoteldata.hotel_description = req.body.hotel_description
                if(req.file)
                    {
                        hoteldata.hotel_image = "hotel/"+req.file.filename
                    }
                    hoteldata.save()

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
    addhotel,
    getallhotel,
    getsingle,
    update,
    // deletedata
}