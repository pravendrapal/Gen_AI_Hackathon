import { Outlet } from "react-router";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ChatBot from "./components/Chatbot";


export default function layout(){
    return(
        <>
        <Navbar/>
        <Outlet/>
        <ChatBot/>
        <Footer/>
        </>
    )
}