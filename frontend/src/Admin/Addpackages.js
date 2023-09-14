import { useState } from "react"
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import apiservices from "./apiServices"


export default function Addpackages() {
    const [package_name, setPackageName] = useState()
    const [package_description, setPackageDescription] = useState()
    const [package_image, setPackageImage] = useState()
    const enterPackageName = (e) => {
        setPackageName(e.target.value)
    }
    const enterPackageDescription = (e) => {
        setPackageDescription(e.target.value)
    }
    const enterPackageImage = (e) => {
        setPackageImage(e.target.files[0])
    }


    const handelForm = (e) => {
        e.preventDefault()
        let data = new FormData()
        data.append("package_name", package_name)     
        data.append("package_description", package_description)
        data.append("package_image", package_image)
        apiservices.addpackage(data).then(
            (x) => {
                if (x.data.success) {
                    toast.success("Package added")

                }
                else {

                    toast.error(x.data.msg)
                }

            }


        ).catch()


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
                                                    <input className="form-control my-3  " value={package_name} onChange={enterPackageName} />
                                                </div>

                                            </div>

                                            <div className="row">
                                                <div className="col-md-12 ">
                                                    <label>Description</label>
                                                    <input className="form-control my-3  " value={package_description} onChange={enterPackageDescription} />
                                                </div>

                                            </div>

                                            <div className="row">
                                                <div className="col-md-12 ">
                                                    <label>Image</label>
                                                    <input type="file" class="form-control " onChange={enterPackageImage} />

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
            <ToastContainer />

        </>
    )
}
