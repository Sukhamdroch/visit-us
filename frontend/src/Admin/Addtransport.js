import { useState } from "react"
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import apiservices from "../Admin/apiServices"


export default function Addtransport() {
    const [transport_name, setTransportName] = useState()
    const [transport_description, setTransportDescription] = useState()
    const [transport_image, setTransportImage] = useState()
    const enterTransportName = (e) => {
        setTransportName(e.target.value)
    }
    const enterTransportDescription = (e) => {
        setTransportDescription(e.target.value)
    }
    const enterTransportImage = (e) => {
        setTransportImage(e.target.files[0])
    }

    const handelForm = (e) => {
        e.preventDefault()
        let data = new FormData()
        data.append("transport_name",transport_name)
        data.append("transport_description",transport_description)
        data.append("transport_image",transport_image)
        apiservices.addtransport(data).then(
            (x) => {
                if (x.data.success) {
                    toast.success("Transport added")

                }
                else {

                    toast.error(x.data.msg)
                }

            }


        ).catch()

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
                                                        <input className="form-control my-3  " value={transport_name} onChange={enterTransportName}  />
                                                    </div>

                                                </div>

                                                <div className="row">
                                                    <div className="col-md-12 ">
                                                        <label>Transport Description</label>
                                                        <input className="form-control my-3  " value={transport_description} onChange={enterTransportDescription} />
                                                    </div>

                                                </div>

                                                <div className="row">
                                                    <div className="col-md-12 ">
                                                        <label> Transport Image</label>
                                                        <input type="file" class="form-control " onChange={enterTransportImage} />

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
                <ToastContainer/>

            </>
        )
    }