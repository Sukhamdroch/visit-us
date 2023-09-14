import { BASE_URL_FILE } from "./apiServices"
import { useEffect } from "react"
import apiservices from "./apiServices"
import { Navigate } from "react-router-dom"
import { useState } from "react"
import { Link } from "react-router-dom"

export default function Viewtransport() {
    const [transport, setTransport] = useState()
    useEffect(() => {

        let d = {}
        apiservices.gettransport(d).then((x) => {
            // console.log(x)
            setTransport(x.data.data)
        }).catch((error) => {
            // console.log(error)
        })
    }, [])
    return (
        <>
            <div className="container-fluid back-img" style={{ height: "890px" }}>
            <div className="row"></div>

<div className="row m-5 color-b">
    <div className="col-md-8 mx-auto mt-5 mb-5">
        <div class="card color-m" >
            <div class="card-body">
                <h5 class="card-title">View Transport</h5>
                <hr />
                <table className="table table-bordered table-hover table-striped">
                    <thead>
                        <tr>
                            <th>Sr.No</th>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Images</th>
                            <th>Edit</th>

                        </tr>
                    </thead>
                    {transport?.map((el, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{el.transport_name}</td>
                            <td>{el.transport_description}</td>


                            <td>
                                <img src={BASE_URL_FILE + `${el.transport_image}`}
                                    style={{ height: "100px", width: "320px" }} />
                            </td>
                            <td><button type="button" className="btn btn-style btn-dark bg-secondary " style={{height:"40px", width:"70px"}}><Link to={'/Admin/updatetransport/'+`${el?._id}`}>Edit</Link></button> </td>
                        </tr>
                    ))}
                </table>

            </div>

        </div>
    </div>
</div>

</div>
</>
)
}