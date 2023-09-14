import { Link } from "react-router-dom";
import { BASE_URL_FILE } from "../Admin/apiServices"
import { useEffect } from "react"
import apiservices from "../Admin/apiServices"
import { Navigate } from "react-router-dom"
import { useState } from "react"
export default function Usercity() {
    const [city, setCity] = useState([{}])
    useEffect(() => {

        let d = {}
        apiservices.getcity(d).then((x) => {
            // console.log(x.data.data)
            setCity(x.data.data)
        }).catch((error) => {
            // console.log(error)
        })
    }, [])
  
    return (
        <>
            <div className="container-fluid back-img" style={{ height: "2290px" }}>
                <div className="row"></div>

                <div className="row m-5 ">
                    {city?.map((el, index) => (
                        <div className="col-md-4 mt-5 mb-5">
                            <div class="card" >
                                <img class="card-img-top" src={BASE_URL_FILE + `${el?.city_image}`
                                } alt="Card image cap" style={{ height: "250px" }} />
                                <div class="card-body ">
                                    <h5 class="card-title">{el?.city_name}</h5>
                                    <p class="card-text">{el?.city_description}</p>
                                    <div class="d-flex justify-content-center">
                                        <Link to="/User/Userhotel">  <button type="submit" class="btn btn-style btn-dark m-3">VIEW
                                        </button> </Link> </div>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>

            </div>
        </>
    )
}