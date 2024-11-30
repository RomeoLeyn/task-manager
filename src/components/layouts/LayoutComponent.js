import { Outlet } from "react-router-dom"

import "./Layout.css"
import Header from "./Header"
import Footer from "../Footer"
import { useAuth } from "../../hooks/useAuth"
import DefaultHeader from "./DefaultHeader"

export const LayoutComponent = () => {
    const { user } = useAuth();
    
    return (
        <>
            <div className="layout-container">
                {user !== null ?<Header /> : <DefaultHeader /> }
                <div className="content"> <Outlet /> </div>
                {/* {user !== null ? <Footer /> : null} */}
                <Footer />
            </div>
        </>
    )
}