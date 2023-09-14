import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import apiservices from "./apiServices";
import { useEffect} from "react";
import apiServices from "./apiServices"
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
export default function Updatehotel(){
    const [hotel_name, setHotelName] = useState()
    const [hotel_description, setHotelDescription] = useState()
    const [hotel_image, setHotelImage] = useState()
   
   const param=useParams()
   const _id=param.id
   const nav=useNavigate()
    useEffect(()=>{
        apiServices.getsinglehotel(_id).then(
         (x)=>{
            setHotelName(x.data.data.hotel_name)
            setHotelDescription(x.data.data.hotel_description)
            setHotelImage(x.data.data.hotel_image)
        }
    ).catch()
},[])         
    const handelForm = (e) => {
        e.preventDefault()
        let data = new FormData()
        data.append("hotel_name",hotel_name)
        data.append("hotel_description",hotel_description)
        data.append("hotel_image",hotel_image)
        data.append("_id",_id)
        apiservices.updatehotel(data).then(
         (result)=>{
            // console.log(result)
            nav("/Admin/Viewhotel")
         }
        ).catch((err)=>{
            console.log(err)
        })
     }

     return (
        <>
            <div className="container-fluid back-img"style={{ height:"710px"}}>
                <div className="row"></div>
                <div className="row m-5 color-b">

                    <div className="col-md-8 mt-5 mx-auto mb-5  p-5 ">
                        <div class="card color-m" >
                            <div class="card-body">
                                <h5 class="card-title">Add Hotel</h5>
                                <hr />
                                <div className="row">
                                    <div className=" from-group col-md-12 ">
                                        <form onSubmit={handelForm} >
                                            <div className="row">
                                                <div className="col-md-12 ">
                                                    <label>Hotel Name</label>
                                                    <input className="form-control my-3  " value={hotel_name} onChange={(e)=>{setHotelName(e.target.value)}}  />
                                                </div>

                                            </div>

                                            <div className="row">
                                                <div className="col-md-12 ">
                                                    <label>Hotel Description</label>
                                                    <textarea className="form-control my-3"  value={hotel_description} onChange={(e)=>{setHotelDescription(e.target.value)}}></textarea>
                                                </div>

                                            </div>
                                           
                                            


                                             <div className="row">
                                                <div className="col-md-12 ">
                                                    <label>Hotel Image</label>
                                                    <input type="file" class="form-control " onChange={(e)=>{setHotelImage(e.target.files[0])}}  />

                                                </div>

                                            </div>

                                            <div className="row">
                                                <div className="col-md-12 ">
                                                    <div class="submit text-cset m-3">

                                                        <button type="submit" class="btn btn-style btn-dark m-3">Save
                                                        </button>
                                                    </div>

                                                </div>

                                            </div>



                                        </form>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>

                </div>
                

            </div>

        </>
    )
}