import { Link } from "react-router-dom"; 

export default function Hotel() {
    const Hotel=[
        {
            package_name:"Hotel Clark",
            price: "Price: Rs 20,000/-",
            image:"hotel1.jpg",
            // days:"Days: 10 days"
        },
        {
            
            package_name:"Hotel Mark",
            price:"Price: Rs 20,000/-",
            image:"hotel2.jpg",
            // days:"Days: 10 days"
        },
        {
            package_name:"Hotel Sharp",
            price:"Price: Rs 20,000/-",
            image:"hotel3.jpg",
            // days:"Days: 10 days"
        }
    ]
    return (
        <>

        {/* <!-- short --> */}

    {/* <!-- //short--> */}


            <div className="container-fluid back-img"style={{ height:"680px"}}>
            <div className="row"></div>
                <div className="row m-5 ">
                    {Hotel.map((element,index)=>(
                          <div className="col-md-4 mt-5 mb-5">
                        <div class="card" >
                            <img class="card-img-top" src={"/assets/images/"+`${element.image}`
                        } alt="Card image cap" style={{height:"250px"}}/>
                                <div class="card-body">
                                    <h5 class="card-title">{element.package_name}</h5>
                                    <p class="card-text">{element.price}</p>
                                    
                  {/* <div class="d-flex justify-content-center">     
                                    <Link to="">  <button type="submit" class="btn btn-style btn-dark m-3">VIEW
                                                        </button> </Link> </div> */}
                                </div>
                        </div>
                    </div>
                    ))}
                  
                </div>

            </div>
        </>
    )
}