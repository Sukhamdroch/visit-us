import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import apiservices from "./apiServices";
import { useEffect} from "react";
import apiServices from "./apiServices"
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
export default function Updatecity(){
    const [city_name, setCityName] = useState()
    const [city_description, setCityDescription] = useState()
    const [city_image, setCityImage] = useState()
   
   const param=useParams()
   const _id=param.id
   const nav=useNavigate()
    useEffect(()=>{
        apiServices.getsinglecity(_id).then(
         (x)=>{
            setCityName(x.data.data.city_name)
            setCityDescription(x.data.data.city_description)
            setCityImage(x.data.data.city_image)
        }
    ).catch()
},[])         
    const handleForm = (e) => {
        e.preventDefault()
        let data = new FormData()
        data.append("city_name",city_name)
        data.append("city_description",city_description)
        data.append("city_image",city_image)
        data.append("_id",_id)
        apiservices.updatecity(data).then(
         (result)=>{
            // console.log(result)
            nav("/Admin/Viewcity")
         }
        ).catch((err)=>{
            console.log(err)
        })
     }

     return (
        <>
            <div className="container-fluid back-img" style={{ height: "710px" }}>
                <div className="row"></div>
                <div className="row m-5 color-b">

                    <div className="col-md-8 mt-5 mx-auto mb-5  p-5 ">
                        <div class="card color-m" >
                            <div class="card-body">
                                <h5 class="card-title">Add City</h5>
                                <hr />
                                <div className="row">
                                    <div className=" from-group col-md-12 ">
                                        <form onSubmit={handleForm} >
                                            <div className="row">
                                                <div className="col-md-12 ">
                                                    <label>City Name</label>
                                                    <input required className="form-control my-3  " value={city_name} onChange={(e)=>{setCityName(e.target.value)}} />
                                                </div>

                                            </div>

                                            <div className="row">
                                                <div className="col-md-12 ">
                                                    <label>City Description</label>
                                                    <textarea  required  className="form-control my-3" value={city_description} onChange={(e)=>{setCityDescription(e.target.value)}}></textarea>
                                                </div>

                                            </div>
                                            <div className="row">
                                                <div className="col-md-12 ">
                                                    <label>Product Image</label>
                                                    <input  required  type="file" class="form-control " onChange={(e)=>{setCityImage(e.target.files[0])}} />

                                                </div>

                                            </div>


                                            <div className="row">
                                                <div className="col-md-12 ">
                                                    <div class="submit text-center m-3">

                                                        <button type="submit" class="btn btn-style btn-dark m-3">Submit
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