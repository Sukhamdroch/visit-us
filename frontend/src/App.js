import logo from './logo.svg';
import './App.css';
import Main from './Layout/Main';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import About from './Layout/About';
import Master from './Master';
import Service from './Layout/Service';
// import Login from './Layout/Login';
import Register from './Layout/Register';
import Adminmaster from './Admin/Adminmaster';
import Dashboard from './Admin/Dashboard';
import Addpackages from './Admin/Addpackages';
import Viewpackages from './Admin/Viewpackages';
import Viewlocation from './Admin/Viewlocation';
import Home from './Admin/Home';
// import Packages from './Admin/Packages';
import Addlocation from './Admin/Addlocation';
import Usermaster from './User/Usermaster';
import Userlogin from './User/Userlogin';
import Userregister from './User/Userregister';
import Userhome from './User/Userhome';
import Userpackages from './User/Userpackages';
import Userdashboard from './User/Userdashboard';
import Userlocation from './User/Userlocation';
import Car from './Layout/Car';
import Userbooking from './User/Userbooking';
import Usercarlocation1 from './User/Usercarlocation1';
import Usertransport from './User/Userstransport';
import Addcity from './Admin/Addcity';
import Viewcity from './Admin/Viewcity';

import Addtransport from './Admin/Addtransport';
import Viewtransport from './Admin/Viewtransport';
import Addhotel from './Admin/Addhotel';
import Viewhotel from './Admin/Viewhotel';
import Usercity from './User/Usercity';
import City from './Layout/City';
import Hotel from './Layout/Hotel';
import Package from './Layout/Package';
import Userhotel from './User/Userhotel';
import Updatecity from './Admin/Updatecity';
import Updatehotel from './Admin/Updatehotel';
import Updatepackages from './Admin/Updatepackages';
import Updatetransport from './Admin/Updatetransport';
import Updatelocation from './Admin/Updatelocation';
import Usercheckout from './User/Usercheckout';








function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Master />}>
            <Route path="/" element={<Main />} />
            {/* <Route path="/about" element={<About />} /> */}
            <Route path="/service" element={<Service />} />
            {/* <Route path="/login" element={<Login />} /> */}
            <Route path="/register" element={<Register />} />
            <Route path="/car" element={<Car />} />
            <Route path="/city" element={<City />} />
            <Route path="/hotel" element={<Hotel />} />
            <Route path="/package" element={<Package />} />
            <Route path="/login" element={<Userlogin />} />
            
          </Route>

          <Route path="/Admin" element={<Adminmaster />} >
            <Route path="/Admin" element={<Dashboard />} />
            <Route path="/Admin/Addlocation" element={<Addlocation />} />
            <Route path="/Admin/Addhotel" element={<Addhotel />} />
            <Route path="/Admin/Addtransport" element={<Addtransport />} />
            <Route path="/Admin/Addpackages" element={<Addpackages />} />
            <Route path="/Admin/Addcity" element={<Addcity />} />
            <Route path="/Admin/Viewlocation" element={<Viewlocation />} />
            <Route path="/Admin/Viewpackages" element={<Viewpackages />} />
            <Route path="/Admin/Viewcity" element={<Viewcity />} />
            <Route path="/Admin/Viewhotel" element={<Viewhotel />} />
            <Route path="/Admin/Viewtransport" element={<Viewtransport />} />
            <Route path="/Admin/Home" element={<Home />} />
            <Route path="/Admin/updatecity/:id" element={< Updatecity/>} />
            <Route path="/Admin/updatehotel/:id" element={< Updatehotel/>} />
            <Route path="/Admin/updatepackages/:id" element={< Updatepackages/>} />
            <Route path="/Admin/updatetransport/:id" element={< Updatetransport/>} />
            <Route path="/Admin/updatelocation/:id" element={< Updatelocation/>} />

            {/* <Route path="/Admin/Packages" element={<Packages/>} /> */}
            {/* <Route path="/Admin/Adminlogin" element={<Adminlogin />} /> */}

          </Route>

          <Route path="/User" element={<Usermaster />} >
          
          <Route path="/User/Userregister" element={<Userregister />} />
          <Route path="/User/Userhome" element={<Userhome />} />
          <Route path="/User/Userpackages" element={<Userpackages />} />
          <Route path="/User/Userdashboard" element={<Userdashboard />} />
          <Route path="/User/Userlocation" element={<Userlocation />} />
          <Route path="/User/Usercarlocation1" element={<Usercarlocation1 />} />
          <Route path="/User/Usertransport" element={<Usertransport />} />
          <Route path="/User/Userbooking" element={<Userbooking />} />
          <Route path="/User/Usercity" element={<Usercity />} />
          <Route path="/User/Userhotel" element={<Userhotel />} />
          <Route path="/User/Usercheckout" element={<Usercheckout />} />

          







          </Route>

        </Routes>
      </Router>
    </>
  );
}

export default App;

