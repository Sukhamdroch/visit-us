import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import apiservices from "./apiServices";
import { useEffect} from "react";
import apiServices from "./apiServices"
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
export default function Updatepackages(){
    const [package_name, setPackageName] = useState()
    const [package_description, setPackageDescription] = useState()
    const [package_image, setPackageImage] = useState()
   
   const param=useParams()
   const _id=param.id
   const nav=useNavigate()
    useEffect(()=>{
        apiServices.getsinglepackage(_id).then(
         (x)=>{
            setPackageName(x.data.data.package_name)
            setPackageDescription(x.data.data.package_description)
            setPackageImage(x.data.data.package_image)
        }
    ).catch()
},[])         
    const handelForm = (e) => {
        e.preventDefault()
        let data = new FormData()
        data.append("package_name",package_name)
        data.append("package_description",package_description)
        data.append("package_image",package_image)
        data.append("_id",_id)
        apiservices.updatepackage(data).then(
         (result)=>{
            // console.log(result)
            nav("/Admin/Viewpackage")
         }
        ).catch((err)=>{
            console.log(err)
        })
     }
     return (
        <>

            <div className="container-fluid back-img " style={{ height: "1200px" }}>
                <div className="row"></div>
                <div className="row m-5 color-b">

                    <div className="col-md-8 mt-5 mx-auto mb-5  p-5">
                        <div class="card color-m" >

                            <div class="card-body ">
                                <h5 class="card-title">Add Package</h5>
                                <hr />
                                <div className="row">
                                    <div className=" from-group col-md-12 ">
                                        <form onSubmit={handelForm} >

                                            <div className="row">
                                                <div className="col-md-12 ">
                                                    <label>Package Name</label>
                                                    <input className="form-control my-3  " value={package_name} onChange={(e)=>{setPackageName(e.target.value)}} />
                                                </div>

                                            </div>

                                            <div className="row">
                                                <div className="col-md-12 ">
                                                    <label>Description</label>
                                                    <input className="form-control my-3  " value={package_description} onChange={(e)=>{setPackageDescription(e.target.value)}} />
                                                </div>

                                            </div>

                                            <div className="row">
                                                <div className="col-md-12 ">
                                                    <label>Image</label>
                                                    <input type="file" class="form-control " onChange={(e)=>{setPackageImage(e.target.files[0])}}  />

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
