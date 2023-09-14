import { Link } from "react-router-dom"; 

export default function Userbooking() {
    return (
        <>
            <div className="container-fluid back-img" style={{ height: "1180px" }}>
                <div className="row"></div>
                <div className="row m-5 color-b">

                    <div className="col-md-8 mt-5 mx-auto mb-5  p-5 ">
                        <div class="card color-m" >
                            <div class="card-body">
                                <h5 class="card-title">BOOK A PACKAGE</h5>
                                <hr />
                                <div className="row">
                                    <div className=" from-group col-md-12 ">
                                        <form>
                                            <div className="row">
                                                <div className="col-md-12 ">
                                                    <label>Packge Name</label>
                                                    <input className="form-control my-3  " />
                                                </div>

                                            </div>
                                            <div className="row">
                                                <div className="col-md-12 ">
                                                    <label>Location Name</label>
                                                    <input className="form-control my-3  " />
                                                </div>

                                            </div>
                                            <div className="row">
                                                <div className="col-md-12 ">
                                                    <label>City Name</label>
                                                    <input className="form-control my-3  " />
                                                </div>

                                            </div>
                                            <div className="row">
                                                <div className="col-md-12 ">
                                                    <label>Hotel Name</label>
                                                    <input className="form-control my-3  " />
                                                </div>

                                            </div>
                                            <div className="row">
                                                <div className="col-md-12 ">
                                                    <label>Transport Name</label>
                                                    <input className="form-control my-3  " />
                                                </div>

                                            </div>

                                            <div className="row">
                                                <div className="col-md-12 ">
                                                    <label>Date from</label>
                                                    <input type="date" class="form-control datetimepicker-input"></input>

                                                </div>

                                            </div>

                                            <div className="row">
                                                <div className="col-md-12 ">
                                                    <label>Date to</label>
                                                    <input type="date" class="form-control datetimepicker-input"></input>

                                                </div>

                                            </div>

                                           
                                            <div class="d-flex justify-content-center">     
                  <Link to="/User/Usercheckout">  
                  <button type="submit" class="btn btn-style btn-dark m-3">BOOK
                  </button> 
                  </Link>
                  </div>
                                        



                                        </form>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>

                </div>


            </div>

        </>
    )
}