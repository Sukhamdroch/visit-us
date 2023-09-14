import { Link } from "react-router-dom"; 
import { BASE_URL_FILE } from "../Admin/apiServices"
import { useEffect } from "react"
import apiservices from "../Admin/apiServices"
import { Navigate } from "react-router-dom"
import { useState } from "react"
export default function Userpackages() {
    const [packages, setPackage] = useState([{}])
    useEffect(() => {

        let d = {}
        apiservices.getallpackage(d).then((x) => {
            // console.log(x.data.data)
            setPackage(x.data.data)
        }).catch((error) => {
            // console.log(error)
        })
    }, [])
    return (
// const Packages = [
//   {
//       cat_srno: "1",
//       cat_name: "Kashmir Package",
//       cat_img: "package.jpg",
//       cat_price: "Price: 20k (per person)",
//       cat_city:"Cities: Gulmarg and Srinagar"
//     //   cat_des: "The package offers visiting two major cities of Kashmir"


//   },
//   {
//       cat_srno: "2",
//       cat_name: "Delhi Package",
//       cat_img: "package1.jpg",
//       cat_price: "Price: 20k (per person)",
//       cat_city:"Cities: Gurugram and Noida"

//     //   cat_des: "The package offers visiting two major cities of Delhi"

//   },
//   {
//       cat_srno: "3",
//       cat_name: "Gujrat Package",
//       cat_img: "package2.jpg",
//       cat_price: "Price: 20k (per person)",
//       cat_city:"Cities: Amedabad and Surat"


//     //   cat_des: "The package offers visiting two major cities of Gujrat"
      
//   },
//   {
//       cat_srno: "1",
//       cat_name: "Goa Package",
//       cat_img: "package.jpg",
//       cat_price: "Price: 20k (per person)",
//       cat_city:"Cities: Ponda and Canacona"


//     //   cat_des: "The package offers visiting two major cities of Goa"


//   },
//   {
//       cat_srno: "2",
//       cat_name: "Kerela Package",
//       cat_img: "package1.jpg",
//       cat_price: "Price: 20k (per person)",
//       cat_city:"Cities: Thiruvananthapuram and Kochi"
      
//     //   cat_des: "The package offers visiting two major cities of Kerela"

//   }
// ]
    <>




      <div className="container-fluid back-img"style={{ height:"1170px"}} >
        <div className="row"></div>

        <div className="row m-5">
          
          {packages?.map((el, index) => (
            <div className="col-md-4 mt-5 mb-5">
              <div class="card" >
                <img class="card-img-top" src={BASE_URL_FILE + `${el.package_image}`
                } alt="Card image cap" style={{ height: "250px" }} />
                <div class="card-body">
                  <h5 class="card-title">{el?.package_name}</h5>
                  <p class="card-text">{el?.package_description}</p>
                  <div class="d-flex justify-content-center">     
                  <Link to="/User/Userbooking">  
                  <button type="submit" class="btn btn-style btn-dark m-3">BOOK
                  </button> 
                  </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}

        </div>

      </div>
     
    
      
  
    </>
  )
}