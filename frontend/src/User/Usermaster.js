import { Outlet } from "react-router-dom";
import Userheader from "./Userheader";



export default function Usermaster(){
    return(
        <>
        <Userheader/>
       <Outlet/>
        
        
        </>
    )
}