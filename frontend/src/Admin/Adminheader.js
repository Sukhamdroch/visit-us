import { Link } from "react-router-dom";

export default function Adminheader() {
  return (
    <>
      {/* <!-- header --> */}
      <div className="headder-top">
        {/* <!-- nav --> */}
        <nav>
          <div id="logo">
            <h1>
              <a href="index.html">VISITUS</a>
            </h1>
          </div>
          {/* <label for="drop" className="toggle">Menu</label> */}
          <ul className="menu mt-2">
            <li className="active">
              <Link to="/Admin">
                <a href="admin.html">Dashboard</a>
              </Link>
            </li>

            <li class="nav-item mx-5 dropdown mt-2">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Packages
              </a>
              <ul class="dropdown-menu">
                <li>
                  <Link to="/Admin/Addpackages">
                    <a href="about.html">Add Packages</a>
                  </Link>
                </li>

                <li>
                  <Link to="/Admin/Viewpackages">
                    <a href="register.html">View packages</a>
                  </Link>
                </li>
              </ul>
            </li>

            <li class="nav-item mx-5 dropdown  mt-2">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Location
              </a>
              <ul class="dropdown-menu">
                <li>
                  <Link to="/Admin/Addlocation">
                    <a href="service.html">Add location</a>
                  </Link>
                </li>
                <li>
                  <Link to="/Admin/Viewlocation">
                    <a href="login.html">View location</a>
                  </Link>
                </li>
              </ul>
            </li>

            <li class="nav-item mx-5 dropdown  mt-2">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                City
              </a>
              <ul class="dropdown-menu">
                <li>
                  <Link to="/Admin/Addcity">
                    <a href="login.html">Add City</a>
                  </Link>
                </li>

                <li>
                  <Link to="/Admin/Viewcity">
                    <a href="register.html">View City</a>
                  </Link>
                </li>
              </ul>
            </li>


           
            <li class="nav-item mx-5 dropdown  mt-2">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Hotel
              </a>
              <ul class="dropdown-menu">
                <li>
                  <Link to="/Admin/Addhotel">
                    <a href="register.html">Add Hotel</a>
                  </Link>
                </li>

                <li>
                  <Link to="/Admin/Viewhotel">
                    <a href="register.html">View Hotel</a>
                  </Link>
                </li>

              </ul>
            </li>


            <li class="nav-item mx-5 dropdown  mt-2">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Transport
              </a>
              <ul class="dropdown-menu">
                <li>
                  <Link to="/Admin/Addtransport">
                    <a href="register.html">Add Transport</a>
                  </Link>
                </li>
                <li>
                  <Link to="/Admin/Viewtransport">
                    <a href="register.html">View Transport</a>
                  </Link>
                </li>

              </ul>
            </li>

            
            <li>
              <Link to="/">
                <a href="login.html">Logout</a>
              </Link>
            </li>
          </ul>
        </nav>
        {/* <!-- //nav --> */}
      </div>
      {/* <!-- //header --> */}
    </>
  )
}