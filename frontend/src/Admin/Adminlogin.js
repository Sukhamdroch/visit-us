import { useState } from "react";
import { Link, Navigate } from "react-router-dom"; 
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import { useNavigate } from "react-router-dom";
import apiservices from "./apiServices";

export default function Adminlogin() {
    const navigate = useNavigate()

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const handelForm = (e) => {
        e.preventDefault()
        let data = {
            email: email,
            password: password,
        }
        apiservices.login(data).then((x) => {
            if (x.data.success) {
                toast.success("Login successful")
                sessionStorage.setItem("token", x.data.token)
                
                if (x.data.data.user_type == 1) {
                    setTimeout(() => {
                        navigate("/Admin")
                    }, 1000);
                }
                else {
                    setTimeout(() => {
                        navigate("/user")
                    }, 1000);
                }
            }
            else {
                toast.error("Incorrect email and password")

            }

        }).catch((err) => {
            toast.error(" Something went wrong try again later")

        })

    }
    return (
      <>
<div className="signinform">
        {/* <h1>Service Login Form</h1> */}
        {/* <!-- container --> */}
        
        <div className="container my-5 p-5 ">
            {/* <!-- main content --> */}
            <div className="w3l-form-info ">
                <div className="w3_info text-center">
                    <h2>ADMIN LOGIN</h2>
                    <form onSubmit={handelForm} action="#" method="post">
                        <div className="input-group">
                            <span><i className="fas fa-user" aria-hidden="true"></i></span>
                            <input type="email" placeholder="Username or Email" required=""  value={email} onChange={(e) => { setEmail(e.target.value) }}/>
                        </div>
                        <div className="input-group">
                            <span><i className="fas fa-key" aria-hidden="true"></i></span>
                            <input type="Password" placeholder="Password" required="" value={password} onChange={(e) => { setPassword(e.target.value) }} />
                        </div>
                        
                        {/* <Link to="/Admin"> */}
                              <button className="btn btn-primary btn-block" type="submit">Submit</button>
                        {/* </Link> */}
                    </form>
                    
                </div>
            </div>
            {/* <!-- //main content --> */}
        </div>
        {/* <!-- //container --> */}
        
    </div>
    <ToastContainer />
    </>
  )
}