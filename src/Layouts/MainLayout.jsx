import { Outlet } from "react-router-dom"
import NavBar from "../Components/NavBar"
import Footer from "../Components/Footer"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const MainLayout = () => {
    return (
        <div>
            <NavBar/>
            <Outlet/>
            <ToastContainer/>
            <Footer/>
        </div>
    )
}

export default MainLayout