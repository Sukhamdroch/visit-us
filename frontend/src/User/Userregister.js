import { Link } from "react-router-dom"; 
import { useState } from "react"
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import apiservices from "../Admin/apiServices";
export default function Userregister() {
    const[name,setName]=useState()
    const[email,setEmail]=useState()
    const[password,setPassword]=useState()
    const[contact,setContact]=useState()
    const[address,setAddress]=useState()

    const enterName=(e)=>{
        setName(e.target.value)
    }
    const enterEmail=(e)=>{
        setEmail(e.target.value)
    }
    const enterPassword=(e)=>{
        setPassword(e.target.value)
    }
    const enterContact=(e)=>{
        setContact(e.target.value)
    }
    const enterAddress=(e)=>{
        setAddress(e.target.value)
    }

    const handleForm = (e) => {
        e.preventDefault()
        let data = {
          name:name,
          email:email,
          password:password,
          contact:contact,
          address:address,
        }
        apiservices.register(data).then(
            (x)=>{
                if(x.data.success){
               toast.success("Register success")

                }
                else{

                    toast.error(" Already registered")
                }

            }


        ).catch()

    }
    return (
      <>
            <div className="container-fluid back-img"style={{ height:"890px"}}>

    <div className="signinform"style={{ height:"890px"}}>
        {/* <h1>Service Login Form</h1> */}
        {/* <!-- container --> */}
        <div className="container my-5 p-5">
            {/* <!-- main content --> */}
            <div className="w3l-form-info">
                <div className="w3_info text-center">
                    <h2>USER - REGISTER</h2>
                    <form onSubmit={handleForm}>
                        <div className="input-group">
                            <span><i className="fas fa-user" aria-hidden="true"></i></span>
                            <input type="text" placeholder="Name " required="" value={name} onChange={enterName} />
                        </div>
                        <div className="input-group">
                            <span><i className="fas fa-user" aria-hidden="true"></i></span>
                            <input type="email" placeholder="Email" required=""  value={email} onChange={enterEmail}  />
                        </div>
                        <div className="input-group">
                            <span><i className="fas fa-key" aria-hidden="true"></i></span>
                            <input type="Password" placeholder="Password" required="" value={password} onChange={enterPassword} />
                        </div>
                      
						<div className="input-group">
                            <span><i className="fa fa-at" aria-hidden="true"></i></span>
                            <input type="text" placeholder="Contact" required="" value={contact} onChange={enterContact} />
                        </div>
                        <div className="input-group">
                            <span><i className="fa fa-at" aria-hidden="true"></i></span>
                            <input type="text" placeholder="Address" required="" value={address} onChange={enterAddress}  />
                        </div>
                           
                        
                        <button className="btn btn-primary btn-block" type="submit">Register</button>
                    </form>
                   
                </div>
            </div>
            {/* <!-- //main content --> */}
        </div>
        {/* <!-- //container --> */}
       
    </div>
    </div>
    <ToastContainer/>

      </>

    )
}