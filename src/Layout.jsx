import { Outlet } from "react-router-dom";
import "./styles/Layout.scss"
import Header from "./components/Header";

function Layout() {

    return (
        <div className="main_layout">
            <Header />


            <Outlet />
            
        </div>
    )
}

export default Layout;
