import { Link } from "react-router-dom"; 

export default function City() {
    const City=[
        {
            city_srno: "1",
            city_name: "Gulmarg in Kashmir",
            city_img: "city1.jpg",
            city_des: "Fall in love with Kashmir with our affordable Kashmir tour citys. Jammu & Kashmir is a world famous tourist destination whose beauty is not only in its landscape but also in its people and culture as well."
      
      
        },
        {
            city_srno: "1",
            city_name: "Srinagar in Kashmir",
            city_img: "city2.jpg",
            city_des: "Fall in love with Kashmir with our affordable Kashmir tour citys. Jammu & Kashmir is a world famous tourist destination whose beauty is not only in its landscape but also in its people and culture as well."
      
      
        },
        {
            city_srno: "2",
            city_name: "Gurugram in Delhi",
            city_img: "city3.jpg",
            city_des: "Delhi, officially the National Capital Territory (NCT) of Delhi, is a city and a union territory of India containing New Delhi, the capital of India.India containing New Delhi, the capital of India",
      
        },
        {
            city_srno: "2",
            city_name: "Noida in Delhi",
            city_img: "city1.jpg",
            city_des: "Delhi, officially the National Capital Territory (NCT) of Delhi, is a city and a union territory of India containing New Delhi, the capital of India.India containing New Delhi, the capital of India",
      
        },
        {
            city_srno: "3",
            city_name: "Ahmedabad in Gujrat",
            city_img: "city2.jpg",
            city_des: "Gujarat is a popular tourist destination in Western India. Explore the diversity of Incredible Gujarat Tour Packages that take you on a tour of picturesque beaches, heritage sites ",
      
        },
        {
            city_srno: "3",
            city_name: "Surat in Gujrat",
            city_img: "city3.jpg",
            city_des: "Gujarat is a popular tourist destination in Western India. Explore the diversity of Incredible Gujarat Tour Packages that take you on a tour of picturesque beaches, heritage sites ",
      
        },
        {
            city_srno: "1",
            city_name: "Ponda in Goa",
            city_img: "city1.jpg",
            city_des: "Goa along with being a popular beach destination in India is a perfect honeymoon destination, a great getaway with friends, and an amazing family holiday place, which means."
      
      
        },
        {
            city_srno: "1",
            city_name: "Canacona in Goa",
            city_img: "city2.jpg",
            city_des: "Goa along with being a popular beach destination in India is a perfect honeymoon destination, a great getaway with friends, and an amazing family holiday place, which means."
      
      
        },
        {
            city_srno: "2",
            city_name: "Thiruvananthapuram in Kerela",
            city_img: "city3.jpg",
            city_des: "Explore the variety of Kerala tour citys offered for both domestic and international travellers that offer a beautiful rendezvous with the beauty of Kerala.",
      
        },
        {
            city_srno: "2",
            city_name: "Kochi in Kerela",
            city_img: "city1.jpg",
            city_des: "Explore the variety of Kerala tour citys offered for both domestic and international travellers that offer a beautiful rendezvous with the beauty of Kerala.",
      
        }
      
    ]
    return (
        <>


            <div className="container-fluid back-img"style={{ height:"2480px"}} >
                <div className="row"></div>

                <div className="row m-5 p-5">
                    {City.map((element,index)=>(
                          <div className="col-md-4 mt-5 mb-5">
                        <div class="card" >
                            <img class="card-img-top" src={"/assets/images/"+`${element.city_img}`
                        } alt="Card image cap" style={{height:"250px"}}/>
                                <div class="card-body ">
                                    <h5 class="card-title">{element.city_name}</h5>
                                    <p class="card-text">{element.city_des}</p>
                  <div class="d-flex justify-content-center">     
                                    <Link to="/hotel">  <button type="submit" class="btn btn-style btn-dark m-3">VIEW
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