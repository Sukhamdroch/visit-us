import { useState } from "react"
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import apiservices from "../Admin/apiServices"


export default function Addlocation() {
    
    const [location_name, setLocationName] = useState()
    const [location_description, setLocationDescription] = useState()
    const [location_image, setLocationImage] = useState()
    const enterLocationName = (e) => {
        setLocationName(e.target.value)
    }
    const enterLocationDescription = (e) => {
        setLocationDescription(e.target.value)
    }
    const enterLocationImage = (e) => {
        setLocationImage(e.target.files[0])
    }




    const handelForm = (e) => {
        e.preventDefault()
        let data = new FormData()
        data.append("location_name",location_name)
        data.append("location_description",location_description)
        data.append("location_image",location_image)
        apiservices.addlocation(data).then(
            (x) => {
                if (x.data.success) {
                    toast.success("Location added")

                }
                else {

                    toast.error(x.data.msg)
                }

            }


        ).catch()

    }

    return (
        <>
            <div className="container-fluid back-img"style={{ height:"710px"}}>
                <div className="row"></div>
                <div className="row m-5 color-b">

                    <div className="col-md-8 mt-5 mx-auto mb-5 p-5 ">
                        <div class="card color-m" >
                            <div class="card-body">
                                <h5 class="card-title">Add Location</h5>
                                <hr />
                                <div className="row">
                                    <div className=" from-group col-md-12 ">
                                        <form onSubmit={handelForm}>
                                            <div className="row">
                                                <div className="col-md-12 ">
                                                    <label>Location Name</label>
                                                    <input className="form-control my-3  "  value={location_name} onChange={enterLocationName} />
                                                </div>

                                            </div>

                                        

                                            <div className="row">
                                                <div className="col-md-12 ">
                                                    <label>Description</label>
                                                    <input className="form-control my-3  "  value={location_description} onChange={enterLocationDescription} />
                                                </div>

                                            </div>

                                            <div className="row">
                                                <div className="col-md-12 ">
                                                    <label>Image</label>
                                                    <input type="file" class="form-control " onChange={enterLocationImage}  />

                                                </div>

                                            </div>

                                            <div className="row">
                                                <div className="col-md-12 ">
                                                    <div class="submit text-center m-3">

                                                    <button type="submit" class="btn btn-style  btn-dark m-3">Save
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
            <ToastContainer/>
        </>
    )
}