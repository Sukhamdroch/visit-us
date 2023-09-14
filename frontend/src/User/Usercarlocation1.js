import { Link } from "react-router-dom";
export default function Usercarlocation1() {
    const Category=[
        {
            package_name:"2-Seater",
            price:"Price: Rs 10,000/-",
            image:"bike.jpg",
            days:"Days: 10 days"
        },
        {
            package_name:"5-Seater",
            price:"Price: Rs 25,000/-",
            image:"seater5.jpg",
            days:"Days: 10 days"
        },
        {
            
            package_name:"7-Seater",
            price:"Price: Rs 45,000/-",
            image:"seater7.jpg",
            days:"Days: 10 days"
        },
        {
            package_name:"12-Seater",
            price:"Price: Rs 65,000/-",
            image:"seater12.jpeg",
            days:"Days: 10 days"
        }
    ]
    return (
        <>           
       
     
            <div className="container-fluid">
                <div className="row"></div>

                <div className="row m-5 ">
                    {Category.map((element,index)=>(
                          <div className="col-md-4 mt-5 mb-5">
                        <div class="card" >
                            <img class="card-img-top" src={"/assets/images/"+`${element.image}`
                        } alt="Card image cap" style={{height:"250px"}}/>
                                <div class="card-body ">
                                    <h5 class="card-title">{element.package_name}</h5>
                                    <p class="card-text">{element.price}</p>
                                    <p class="card-text">{element.days}</p>
                                    <Link to="/User/Userpackages">  <button type="submit" class="btn btn-style m-3">BOOK
                                                        </button> </Link>
                                </div>
                        </div>
                    </div>
                    ))}
                  
                </div>

            </div>
        </>
    )
}