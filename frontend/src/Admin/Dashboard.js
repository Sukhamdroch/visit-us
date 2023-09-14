import { useEffect, useState } from "react"
import apiServices from "./apiServices"
export default function Dashboard() {
    // const [dashboard, setDashboard] = useState()
    const [total_packages, setTotalPackages] = useState()
    const [total_citys, setTotalCities] = useState()
    const [total_hotels, setTotalHotels] = useState()
    const [total_transports, setTotalTransports] = useState()

    useEffect(() => {

        let d = {}
        apiServices.dashboard(d).then((x) => {
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
return(

        <>
     

            <div className="container-fluid back-img"style={{ height:"710px"}}>
            <div className="row"></div>

<div className="row m-5 ">
   
<div className="col-md-3 " >
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

                    <div className="col-md-3" >
                        <div class="card mt-5 mycol  " >
                            <div class="card-body card-h">
                                <h5 class="card-title">Total Cities</h5>
                            </div>
                            <ul class="list-group list-group-flush  card-b">
                                <p className="text-center m-5 display-3 card-t ">
                                    {total_citys}
                                </p>
                            </ul>
                            
                        </div>
                        
                        
                    </div>


                    <div className="col-md-3 " >
                        <div class="card mt-5 mycol  " >
                            <div class="card-body card-h">
                                <h5 class="card-title">Total Hotel</h5>
                            </div>
                            <ul class="list-group list-group-flush  card-b">
                                <p className="text-center m-5 display-3 card-t ">
                                    {total_hotels}
                                </p>
                            </ul>
                            
                        </div>
                        
                        
                    </div>
                    <div className="col-md-3 " >
                        <div class="card mt-5 mycol  " >
                            <div class="card-body card-h">
                                <h5 class="card-title">Total Transport</h5>
                            </div>
                            <ul class="list-group list-group-flush  card-b">
                                <p className="text-center m-5 display-3 card-t ">
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

