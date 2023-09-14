import { useEffect, useState } from "react"
import apiServices from "../Admin/apiServices"
export default function Userdashboard() {
    // const [dashboard, setDashboard] = useState()
    const [total_packages, setTotalPackages] = useState()
    const [total_citys, setTotalCities] = useState()
    const [total_hotels, setTotalHotels] = useState()
    const [total_transports, setTotalTransports] = useState()

    useEffect(() => {

        let d = {}
        apiServices.userdashboard(d).then((x) => {
            console.log(x)
            // setDashboard(x.data)
            setTotalPackages(x.data.total_packages)
            setTotalCities(x.data.total_citys)
            setTotalHotels(x.data.total_hotels)
            setTotalTransports(x.data.total_transports)
        }).catch((error) => {
            // console.log(error)
        })
    }, [])

    return (

        <>
     

     <div className="container-fluid back-img"style={{ height:"710px"}}>
                <div className="row mydashrow ">
                    <div className="col-md-3 p-5 " >
                        <div class="card mt-5 mycol  " >
                            <div class="card-body card-h">
                                <h5 class="card-title">Total Packages</h5>
                            </div>
                            <ul class="list-group list-group-flush  card-b">
                                <p className="text-center m-5 display-3 card-t ">
                                    {total_packages}
                                </p>
                            </ul>
                            
                        </div>
                        
                        
                    </div>
                    <div className="col-md-3 p-5 ">
                        <div class="card mt-5 mycol  " >
                            <div class="card-body card-h ">
                                <h5 class="card-title">Total Hotels</h5>
                            </div>
                            <ul class="list-group list-group-flush card-b ">
                                <p className="text-center m-5 display-3 card-t">
                                  {total_hotels}
                                </p>
                            </ul>
                            
                        </div>
                    </div>
                    <div className="col-md-3 p-5 " >
                        <div class="card mt-5 mycol" >
                            <div class="card-body card-h">
                                <h5 class="card-title ">Total cities</h5>
                            </div>
                            <ul class="list-group list-group-flush  card-b">
                                <p className="text-center m-5 display-3 card-t">
                               {total_citys}
                                </p>
                            </ul>
                            
                        </div>
                    
                    </div>

                    <div className="col-md-3 p-5 " >
                        <div class="card mt-5 mycol" >
                            <div class="card-body card-h">
                                <h5 class="card-title ">Total transport</h5>
                            </div>
                            <ul class="list-group list-group-flush  card-b">
                                <p className="text-center m-5 display-3 card-t">
                               {total_transports}
                                </p>
                            </ul>
                            
                        </div>
                    
                    </div>
                </div>

            </div>
            </>
    )
}