import { Link } from "react-router-dom";
const Categorycar = [
  {
    car_srno: "1",
    car_name: "Car",
    car_img: "car.jpg",
    //   car_des: "Fall in love with Kashmir with our affordable Kashmir tour packages. Jammu & Kashmir is a world famous tourist destination whose beauty is not only in its landscape but also in its people and culture as well."


  },
  {
    car_srno: "2",
    car_name: "Plane",
    car_img: "plane.jpg",
    //   car_des: "Delhi, officially the National Capital Territory (NCT) of Delhi, is a city and a union territory of India containing New Delhi, the capital of India.India containing New Delhi, the capital of India",

  },
  // {
  //   car_srno: "3",
  //   car_name: "Bus",
  //   car_img: "bus.jpg",
  //   //   car_des: "Gujarat is a popular tourist destination in Western India. Explore the diversity of Incredible Gujarat Tour Packages that take you on a tour of picturesque beaches, heritage sites ",

  // },
  {
    car_srno: "3",
    car_name: "Train",
    car_img: "train.jpg",
    //   car_des: "Gujarat is a popular tourist destination in Western India. Explore the diversity of Incredible Gujarat Tour Packages that take you on a tour of picturesque beaches, heritage sites ",

  },
 
]

export default function Car() {
  return (
    <>
   
      <div class="inner_breadcrumb">
        <ul class="short_ls">
          <li>
            <a href="index.html"></a>
            <span></span>
          </li>
          <li></li>
        </ul>
      </div>
  

  

      <div className="container-fluid">
     
        <div className="row m-5 ">
          {Categorycar.map((element, index) => (
            <div className="col-md-4 mt-5 mb-5">
              <div class="card" >
                <img class="card-img-top" src={"/assets/images/" + `${element.car_img}`
                } alt="Card image cap" style={{ height: "250px" }} />
                <div class="card-body">
                  <h5 class="card-title">{element.car_name}</h5>
                  <p class="card-text">{element.car_des}</p>
                  <div class="d-flex justify-content-center">              <Link to="">  <button type="submit" class="btn  btn-style btn-dark m-3">BOOK
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