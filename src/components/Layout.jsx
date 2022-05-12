import { Outlet } from "react-router-dom";
import Header from "./Header";
import Navigation from "./Navigation";

export default function Layout(){
    return(
        <>
        <Header/>
        <Navigation/>
        <Outlet/>
        </>
    )
}