import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import apiservices from "./apiServices";
import { useEffect} from "react";
import apiServices from "./apiServices"
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
export default function Updatetransport(){
    const [transport_name, setTransportName] = useState()
    const [transport_description, setTransportDescription] = useState()
    const [transport_image, setTransportImage] = useState()
   
   const param=useParams()
   const _id=param.id
   const nav=useNavigate()
    useEffect(()=>{
        apiServices.getsingletransport(_id).then(
         (x)=>{
            setTransportName(x.data.data.transport_name)
            setTransportDescription(x.data.data.transport_description)
            setTransportImage(x.data.data.transport_image)
        }
    ).catch()
},[])         
    const handelForm = (e) => {
        e.preventDefault()
        let data = new FormData()
        data.append("transport_name",transport_name)
        data.append("transport_description",transport_description)
        data.append("transport_image",transport_image)
        data.append("_id",_id)
        apiservices.updatetransport(data).then(
         (result)=>{
            // console.log(result)
            nav("/Admin/Viewtransport")
         }
        ).catch((err)=>{
            console.log(err)
        })
     }
   
return (
    <>
      <div className="container-fluid back-img " style={{ height: "710px" }}>
                <div className="row"></div>
                <div className="row m-5 color-b">

                    <div className="col-md-8 mt-5 mx-auto mb-5  p-5">
                        <div class="card color-m" >

                            <div class="card-body ">
                                <h5 class="card-title">Add Transport</h5>
                                <hr />
                                <div className="row">
                                    <div className=" from-group col-md-12 ">
                                        <form onSubmit={handelForm}>

                                            <div className="row">
                                                <div className="col-md-12 ">
                                                    <label>Transport Name</label>
                                                    <input className="form-control my-3  " value={transport_name} onChange={(e)=>{setTransportName(e.target.value)}}  />
                                                </div>

                                            </div>

                                            <div className="row">
                                                <div className="col-md-12 ">
                                                    <label>Transport Description</label>
                                                    <input className="form-control my-3  " value={transport_description} onChange={(e)=>{setTransportDescription(e.target.value)}} />
                                                </div>

                                            </div>

                                            <div className="row">
                                                <div className="col-md-12 ">
                                                    <label> Transport Image</label>
                                                    <input type="file" class="form-control " onChange={(e)=>{setTransportImage(e.target.files[0])}}  />

                                                </div>

                                            </div>

                                            <div className="row ">
                                                <div className="col-md-12 ">
                                                    <div class="submit text-center m-3">

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