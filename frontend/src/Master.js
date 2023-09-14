import { Outlet } from "react-router-dom";
import Header from "./Layout/Header";
import Footer from "./Layout/Footer";

export default function Master(){
    return(
        <>
        <Header/>
        <Outlet/>
        <Footer/>
        </>
    )
}