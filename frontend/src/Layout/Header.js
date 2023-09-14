import { Link } from "react-router-dom";
export default function Header() {
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
           

            <li>
              <Link to="/service">
                <a href="service.html">Destination</a>
              </Link>
            </li>
            <li>
              <Link to="/package">
                <a href="service.html">Packages</a>
              </Link>
            </li>
            <li>
              <Link to="/hotel">
                <a href="service.html">Hotel</a>
              </Link>
            </li>
            {/* <li>
              <Link to="/car">
                <a href="service.html">Transport</a>
              </Link>
            </li> */}

            {/* <li>
              <Link to="/Admin/Adminlogin">
                <a href="login.html">Admin-Login</a>
              </Link>
            </li> */}
            <li>
              <Link to="/login">
                <a href="login.html">Login</a>
              </Link>
            </li>
            <li className="active">
              <Link to="/">
                <a href="index.html">Home</a>
              </Link>
            </li>
            {/* <input type="checkbox" id="drop"/> */}
          {/* <li className="mx-lg-3 mx-md-2 my-md-0"> */}
            {/* <!-- First Tier Drop Down --> */}
            {/* <a href="#">Destination
              <span className="fa fa-angle-down" aria-hidden="true"></span>
            </a>
            <input type="checkbox" id="drop-2"/>
            <ul>
              <li>
                <a href="gallery.html" className="drop-text">Gallery</a>
              </li>
              <li>
                <a href="blog.html" className="drop-text">Blog</a>
              </li>
            </ul>
          </li> */}
        
        
          </ul>
        </nav>
        {/* <!-- //nav --> */}
      </div>
      {/* <!-- //header --> */}
    </>
  )
}

















