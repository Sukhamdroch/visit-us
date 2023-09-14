import { useState } from "react";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import apiServices from "../Admin/apiServices";
// import { useNavigate } from "react-router-dom";

export default function Addcity() {

    const [city_name, setCityName] = useState()
    const [city_description, setCityDescription] = useState()
    const [city_image, setCityImage] = useState()
    
    const enterCityName = (e) => {
        setCityName(e.target.value)
    }
    const enterCityDescription = (e) => {
        setCityDescription(e.target.value)
    }
    const enterCityImage = (e) => {
        setCityImage(e.target.files[0])
    }

    const handelForm = (e) => {
        e.preventDefault()
        let data = new FormData()
        data.append("city_name",city_name)
        data.append("city_description",city_description)
        data.append("city_image",city_image)
        apiServices.addcity(data).then(
            (x) => {
                if (x.data.success) {
                    toast.success("City added")

                }
                else {

                    toast.error(x.data.msg)
                }

            }


        ).catch()

    }
    return (
        <>
            <div className="container-fluid back-img" style={{ height: "810px" }}>
                <div className="row"></div>
                <div className="row m-5 color-b">

                    <div className="col-md-8 mt-5 mx-auto mb-5  p-5 ">
                        <div class="card color-m" >
                            <div class="card-body">
                                <h5 class="card-title">Add City</h5>
                                <hr />
                                <div className="row">
                                    <div className=" from-group col-md-12 ">
                                        <form onSubmit={handelForm} >
                                            <div className="row">
                                                <div className="col-md-12 ">
                                                    <label>City Name</label>
                                                    <input required className="form-control my-3  " value={city_name} onChange={enterCityName} />
                                                </div>

                                            </div>

                                            <div className="row">
                                                <div className="col-md-12 ">
                                                    <label>City Description</label>
                                                    <textarea  required  className="form-control my-3" value={city_description} onChange={enterCityDescription}></textarea>
                                                </div>

                                            </div>
                                            <div className="row">
                                                <div className="col-md-12 ">
                                                    <label>Product Image</label>
                                                    <input  required  type="file" class="form-control " onChange={enterCityImage} />

                                                </div>

                                            </div>


                                            <div className="row">
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
            <ToastContainer />

        </>
    )
}