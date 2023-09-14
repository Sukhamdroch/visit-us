import { Link } from "react-router-dom"; 

export default function Main() {
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
  
  return (
    <>


      <div className="main-top" id="home">

        {/* <!-- banner --> */}
        <div className="main-banner">
          <div className="container-fluid">
            <div className="style-banner ">
              <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-3">
                  <div className="social-icons">
                    <ul>
                      <li>
                        <a href="#">
                          <span className="fa fa-music mr-lg-3"></span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span className="fa fa-house mr-lg-3"></span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span className="fa fa-rss mr-lg-3"></span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span className="fa fa-envelope mr-lg-3"></span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span className="fa fa-heart mr-lg-3"></span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-8 col-md-8 col-sm-9">
                  <div className="banner-right-txt">
                    {/* <h4>Fun and Adventure</h4>
                    <h4>With Joyful Trip to India</h4> */}
                    <div className="two-demo-button mt-lg-4 mt-md-3 mt-3">
                      {/* <p>“India will reveal to you the places in your heart that must be purified.” </p> */}
                    </div>
                    {/* <div className="view-buttn mt-md-4 mt-sm-4 mt-3">
                      <a href="single.html" className="btn">Read More</a>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- //banner --> */}
     
      {/* <div class="container-fluid booking pb-5 wow fadeIn"  >
            <div class="container-fluid" style={{paddingTop:"50px"}}>
                <div class="bg-white shadow"style={{padding:"10px"}} >
                    <div class="row g-2">
                        <div class="col-md-10">
                            <div class="row g-2">
                                <div class="col-md-2">
                                    <div class="date" id="date1" data-target-input="nearest">
                                        <input type="date" class="form-control datetimepicker-input"
                                            placeholder="Check in" data-target="#date1" data-toggle="datetimepicker" />
                                    </div>
                                </div>
                                <div class="col-md-2">
                                    <div class="date" id="date2" data-target-input="nearest">
                                        <input type="date" class="form-control datetimepicker-input" placeholder="Check out" data-target="#date2" data-toggle="datetimepicker"/>
                                    </div>
                                </div>
                                <div class="col-md-2">
                                    <select class="form-select">
                                        <option selected>Destination</option>
                                        <option value="1">Kashmir</option>
                                        <option value="2">Goa</option>
                                        <option value="3">Gujrat</option>
                                        <option value="3">Delhi</option>
                                        <option value="3">Kerela</option>
                                    </select>
                                </div>
                                <div class="col-md-2">
                                    <select class="form-select">
                                        <option selected>Package Name</option>
                                        <option value="1">Kashmir Package</option>
                                        <option value="2">Goa Package</option>
                                        <option value="3">Gujrat Package</option>
                                        <option value="3">Delhi Package</option>
                                        <option value="3">Kerela Package</option>
                                    </select>
                                </div>
                                <div class="col-md-2">
                                    <select class="form-select">
                                        <option selected>Hotel Name</option>
                                        <option value="1">Hotel Clark</option>
                                        <option value="2">Hotel Mark</option>
                                        <option value="3">Hotel sharp</option>
                                    </select>
                                </div>
                                <div class="col-md-2">
                                    <select class="form-select">
                                        <option selected>Mode of Transport</option>
                                        <option value="1">Car</option>
                                        <option value="2">Train</option>
                                        <option value="3">Plane</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       */}
      
      {/* <!-- service --> */}
      <section className="service py-lg-4 py-md-3 py-sm-3 py-3" id="service">
        <div className="container-fluid py-lg-5 py-md-4 py-sm-4 py-3">
          <div className="row">
            <div className="col-lg-3 main-title-text pt-3">
              <h3 className="title">Themes You Can Explore</h3>
            </div>
            <div className="col-lg-9">
              <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-6 service-grid-wthree text-center">
                  <div className="ser-fashion-grid">
                    <div className="about-icon mb-md-4 mb-3">
                      <span className="fa fa-heart" aria-hidden="true"></span>
                    </div>
                    <div className="ser-sevice-grid">
                      <h4 className="pb-3">WILDLIFE</h4>
                      
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 service-grid-wthree text-center">
                  <div className="ser-fashion-grid">
                    <div className="about-icon mb-md-4 mb-3">
                      <span className="fa fa-picture-o" aria-hidden="true"></span>
                    </div>
                    <div className="ser-sevice-grid">
                      <h4 className="pb-3">HERITAGE</h4>
                      {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nibh urna</p> */}
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 service-grid-wthree text-center">
                  <div className="ser-fashion-grid">
                    <div className="about-icon mb-md-4 mb-3">
                      <span className="fa fa-bank" aria-hidden="true"></span>
                    </div>
                    <div className="ser-sevice-grid">
                      <h4 className="pb-3">PILGRIMAGE</h4>
                      {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nibh urna</p> */}
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 mt-lg-4 mt-3 service-grid-wthree text-center">
                  <div className="ser-fashion-grid">
                    <div className="about-icon mb-md-4 mb-3">
                      <span className="fa fa-cab" aria-hidden="true"></span>
                    </div>
                    <div className="ser-sevice-grid">
                      <h4 className="pb-3">HILLSTATION</h4>
                      {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nibh urna</p> */}
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 mt-lg-4 mt-3 service-grid-wthree text-center">
                  <div className="ser-fashion-grid">
                    <div className="about-icon mb-md-4 mb-3">
                      <span className="fa fa-binoculars" aria-hidden="true"></span>
                    </div>
                    <div className="ser-sevice-grid">
                      <h4 className="pb-3">ADVENTURE</h4>
                      {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nibh urna</p> */}
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 mt-lg-4 mt-3 service-grid-wthree text-center">
                  <div className="ser-fashion-grid">
                    <div className="about-icon mb-md-4 mb-3">
                      <span className="fa fa-glass" aria-hidden="true"></span>
                    </div>
                    <div className="ser-sevice-grid">
                      <h4 className="pb-3">BEACH</h4>
                      {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nibh urna</p> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--//service --> */}



     {/* <!-- counter-reset --> */}
     <section className="counter-reset">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-4 count-wthree-num text-center">
              <h5 className="mb-lg-4 mb-md-4 mb-3">Art & Culture</h5>
              <h4 className="mb-3">  </h4>
              <p>Indian art consists of a variety of art forms, including painting, sculpture, pottery, and textile arts such as woven silk. Geographically, it spans the entire Indian subcontinent, including what is now India, Pakistan, Bangladesh, Sri Lanka, Nepal, and at times eastern Afghanistan. </p>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4 count-wthree-num text-center color-one">
              <h5 className="mb-lg-4 mb-md-4 mb-3">Adventure & Sports</h5>
              <h4 className="mb-3"></h4>
              <p>India isn’t just about exploring the exclusive, vibrant, authentic and magnificent places but also a captivating land for adventure junkies. Its huge spread of geographical diversity makes it an ideal destination for thrill-seekers.</p>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4 count-wthree-num text-center color-two">
              <h5 className="mb-lg-4 mb-md-4 mb-3">Shopping & Fun</h5>
              <h4 className="mb-3"></h4>
              <p>Shopping in India is not always as bland as a visit to the neighbourhood shopping mall and swiping your debit card. Colourful, crowded and teeming with possibilities depending on your bargaining powers, visit the following shopping destinations in India to satisfy your inner shopaholic.</p>
            </div>
          </div>
        </div>
      </section>
      {/* <!--//counter-reset --> */}

 {/* <!-- service --> */}
 <section className="service py-lg-4 py-md-3 py-sm-3 py-3" id="service">
        <div className="container-fluid py-lg-5 py-md-4 py-sm-4 py-3">
          <div className="row">
            <div className="col-lg-3 main-title-text pt-3">
              <h3 className="title">PACKAGES AS PER LOCATION</h3>
            </div>
            <div className="col-lg-9">
              <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-6 service-grid-wthree text-center">
                  <div className="ser-fashion-grid">
                    <div className="about-icon mb-md-4 mb-3">
                      <span className="fa fa-heart" aria-hidden="true"></span>
                    </div>
                    <div className="ser-sevice-grid">
                      <h4 className="pb-3">KASHMIR</h4>
                      
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 service-grid-wthree text-center">
                  <div className="ser-fashion-grid">
                    <div className="about-icon mb-md-4 mb-3">
                      <span className="fa fa-picture-o" aria-hidden="true"></span>
                    </div>
                    <div className="ser-sevice-grid">
                      <h4 className="pb-3">DELHI</h4>
                      {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nibh urna</p> */}
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 service-grid-wthree text-center">
                  <div className="ser-fashion-grid">
                    <div className="about-icon mb-md-4 mb-3">
                      <span className="fa fa-bank" aria-hidden="true"></span>
                    </div>
                    <div className="ser-sevice-grid">
                      <h4 className="pb-3">GOA</h4>
                      {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nibh urna</p> */}
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 mt-lg-4 mt-3 service-grid-wthree text-center">
                  <div className="ser-fashion-grid">
                    <div className="about-icon mb-md-4 mb-3">
                      <span className="fa fa-cab" aria-hidden="true"></span>
                    </div>
                    <div className="ser-sevice-grid">
                      <h4 className="pb-3">GUJRAT</h4>
                      {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nibh urna</p> */}
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 mt-lg-4 mt-3 service-grid-wthree text-center">
                  <div className="ser-fashion-grid">
                    <div className="about-icon mb-md-4 mb-3">
                      <span className="fa fa-binoculars" aria-hidden="true"></span>
                    </div>
                    <div className="ser-sevice-grid">
                      <h4 className="pb-3">KERELA</h4>
                      {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nibh urna</p> */}
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 mt-lg-4 mt-3 service-grid-wthree text-center">
                  <div className="ser-fashion-grid">
                    <div className="about-icon mb-md-4 mb-3">
                      <span className="fa fa-glass" aria-hidden="true"></span>
                    </div>
                    <div className="ser-sevice-grid">
                      <h4 className="pb-3"> TAMIL NADU</h4>
                      {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nibh urna</p> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--//service --> */}

     
     


      <div className="container-fluid" >
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
                  <Link to="/city">  <button type="submit" class="btn btn-style btn-dark m-3">VIEW
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
