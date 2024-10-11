import { Outlet, Link } from "react-router-dom"

import "./Layout.css"
import Header from "../Header"
import Footer from "../Footer"

export const LayoutComponent = () => {
    return (
        <>
            <div className="layout-container">
                <Header />
                <div className="content"> <Outlet /> </div>
                <Footer />
            </div>
        </>
    )
}