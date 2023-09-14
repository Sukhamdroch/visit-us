import { Link } from "react-router-dom";
const Packages = [
  {
      cat_srno: "1",
      cat_name: "Kashmir Package",
      cat_img: "package.jpg",
      cat_price: "Price: 20k (per person)",
      cat_city:"Cities: Gulmarg and Srinagar"
    //   cat_des: "The package offers visiting two major cities of Kashmir"


  },
  {
      cat_srno: "2",
      cat_name: "Delhi Package",
      cat_img: "package1.jpg",
      cat_price: "Price: 20k (per person)",
      cat_city:"Cities: Gurugram and Noida"

    //   cat_des: "The package offers visiting two major cities of Delhi"

  },
  {
      cat_srno: "3",
      cat_name: "Gujrat Package",
      cat_img: "package2.jpg",
      cat_price: "Price: 20k (per person)",
      cat_city:"Cities: Amedabad and Surat"


    //   cat_des: "The package offers visiting two major cities of Gujrat"
      
  },
  {
      cat_srno: "1",
      cat_name: "Goa Package",
      cat_img: "package.jpg",
      cat_price: "Price: 20k (per person)",
      cat_city:"Cities: Ponda and Canacona"


    //   cat_des: "The package offers visiting two major cities of Goa"


  },
  {
      cat_srno: "2",
      cat_name: "Kerela Package",
      cat_img: "package1.jpg",
      cat_price: "Price: 20k (per person)",
      cat_city:"Cities: Thiruvananthapuram and Kochi"
      
    //   cat_des: "The package offers visiting two major cities of Kerela"

  }
]

export default function Package() {
  return (
    <>




      <div className="container-fluid back-img"style={{ height:"1170px"}} >
        <div className="row"></div>

        <div className="row m-5">
          
          {Packages.map((element, index) => (
            <div className="col-md-4 mt-5 mb-5">
              <div class="card" >
                <img class="card-img-top" src={"/assets/images/" + `${element.cat_img}`
                } alt="Card image cap" style={{ height: "250px" }} />
                <div class="card-body">
                  <h5 class="card-title">{element.cat_name}</h5>
                  <h5 class="card-title">{element.cat_price}</h5>
                  <h5 class="card-title">{element.cat_city}</h5>
                  <p class="card-text">{element.cat_des}</p>
                  <div class="d-flex justify-content-center">     
                  <Link to="/User/Userbooking">  <button type="submit" class="btn btn-style btn-dark m-3">VIEW
                  </button> </Link>
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