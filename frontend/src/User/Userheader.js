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
          
        <li>
            <Link to="/User/Userdashboard">
              <a href="Userregister.html">Dashboard</a>
            </Link>
          </li>


          <li>
            <Link to="/User/Userpackages">
              <a href="Userregister.html">Packages</a>
            </Link>
          </li>


          <li>
            <Link to="/User/Userlocation">
              <a href="Userregister.html">Location</a>
            </Link>
          </li>

          <li>
            <Link to="/User/Usercity">
              <a href="Userregister.html">City</a>
            </Link>
          </li>

          
          <li>
            <Link to="/User/Userhotel">
              <a href="Userregister.html">Hotel</a>
            </Link>
          </li>


          <li>
            <Link to="/User/Usertransport">
              <a href="Userregister.html">Transport</a>
            </Link>
          </li>
        
         
          <li>
            <Link to="/">
              <a href="login.html">Logout </a>
            </Link>
          </li>
          <li>
         
          </li>
        </ul>
      </nav>
      {/* <!-- //nav --> */}
    </div>
    {/* <!-- //header --> */}
  </>
    )
}