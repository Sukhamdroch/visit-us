import { Link } from "react-router-dom"; 
import { BASE_URL_FILE } from "../Admin/apiServices"
import { useEffect } from "react"
import apiservices from "../Admin/apiServices"
import { Navigate } from "react-router-dom"
import { useState } from "react"
export default function Userlocation() {
    const [location, setLocation] = useState([{}])
    useEffect(() => {

        let d = {}
        apiservices.getlocation(d).then((x) => {
            // console.log(x.data.data)
            setLocation(x.data.data)
        }).catch((error) => {
            // console.log(error)
        })
    }, [])
    return (
        <>
            <div className="container-fluid back-img"style={{ height:"1180px"}}>
                <div className="row"></div>

                <div className="row m-5 ">
                    {location?.map((element,index)=>(
                          <div className="col-md-4 mt-5 mb-5">
                        <div class="card" >
                            <img class="card-img-top" src={ BASE_URL_FILE +`${element?.location_image}`
                        } alt="Card image cap" style={{height:"250px"}}/>
                                <div class="card-body">
                                    <h5 class="card-title">{element?.location_name}</h5>
                                    <p class="card-text">{element?.location_description}</p>
                  <div class="d-flex justify-content-center">     
                                    <Link to="/User/Userlocation">  <button type="submit" class="btn btn-style btn-dark m-3">VIEW
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