import { useState } from "react"
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import apiservices from "./apiServices"

export default function Addhotel() {

    const [hotel_name, setHotelName] = useState()
    const [hotel_description, setHotelDescription] = useState()
    const [hotel_image, setHotelImage] = useState()
    const enterHotelName = (e) => {
        setHotelName(e.target.value)
    }
    const enterHotelDescription = (e) => {
        setHotelDescription(e.target.value)
    }
    const enterHotelImage = (e) => {
        setHotelImage(e.target.files[0])
    }




    const handelForm = (e) => {
        e.preventDefault()
        let data = new FormData()
        data.append("hotel_name",hotel_name)
        data.append("hotel_description",hotel_description)
        data.append("hotel_image",hotel_image)
        apiservices.addhotel(data).then(
            (x) => {
                if (x.data.success) {
                    toast.success("Hotel added")

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
                                                    <input className="form-control my-3  " value={hotel_name} onChange={enterHotelName}  />
                                                </div>

                                            </div>

                                            <div className="row">
                                                <div className="col-md-12 ">
                                                    <label>Hotel Description</label>
                                                    <textarea className="form-control my-3"  value={hotel_description} onChange={enterHotelDescription}></textarea>
                                                </div>

                                            </div>
                                           
                                            


                                             <div className="row">
                                                <div className="col-md-12 ">
                                                    <label>Hotel Image</label>
                                                    <input type="file" class="form-control " onChange={enterHotelImage}  />

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
            <ToastContainer/>

        </>
    )
}