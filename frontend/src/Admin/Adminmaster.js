import { Outlet } from "react-router-dom";
import Adminheader from "./Adminheader";



export default function Adminmaster(){
    return(
        <>
        <Adminheader/>
       <Outlet/>
        
        
        </>
    )
}