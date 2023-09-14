import { Link } from "react-router-dom";
const Category = [
  {
      cat_srno: "1",
      cat_name: "Kashmir",
      cat_img: "location.jpg",
      cat_des: "Fall in love with Kashmir with our affordable Kashmir tour locations. Jammu & Kashmir is a world famous tourist destination whose beauty is not only in its landscape but also in its people and culture as well."


  },
  {
      cat_srno: "2",
      cat_name: "Delhi",
      cat_img: "location1.jpg",

      cat_des: "Delhi, officially the National Capital Territory (NCT) of Delhi, is a city and a union territory of India containing New Delhi, the capital of India.India containing New Delhi, the capital of India",

  },
  {
      cat_srno: "3",
      cat_name: "Gujrat",
      cat_img: "location2.jpg",
      cat_des: "Gujarat is a popular tourist destination in Western India. Explore the diversity of Incredible Gujarat Tour Packages that take you on a tour of picturesque beaches, heritage sites ",

  },
  {
      cat_srno: "1",
      cat_name: "Goa",
      cat_img: "location.jpg",
      cat_des: "Goa along with being a popular beach destination in India is a perfect honeymoon destination, a great getaway with friends n amazing family holiday place"


  },
  {
      cat_srno: "2",
      cat_name: "Kerela",
      cat_img: "location1.jpg",
      cat_des: "Explore the variety of Kerala tour locations offered for both domestic and international travellers that offer a beautiful rendezvous with the beauty of Kerala.",

  }
]

export default function Service() {
  return (
    <>


      <div className="container-fluid back-img"style={{ height:"1000px"}}>
        <div className="row"></div>
        
        <div className="row m-5">
          
          {Category.map((element, index) => (
            <div className="col-md-4 mt-5">
              <div class="card" >
                <img class="card-img-top" src={"/assets/images/" + `${element.cat_img}`
                } alt="Card image cap" style={{ height: "250px" }} />
                <div class="card-body">
                  <h5 class="card-title">{element.cat_name}</h5>
                  <p class="card-text">{element.cat_des}</p>
                  {/* <div class="d-flex justify-content-center">     
                  <Link to="/">  <button type="submit" class="btn btn-style btn-dark m-3">VIEW
                  </button> </Link>
                  </div> */}
                </div>
              </div>
            </div>
          ))}

        </div>

      </div>
     
    
      
  
    </>
  )
}