import { Outlet } from "react-router-dom";
import "./styles/Layout.scss"
import Header from "./components/Header";
import Footer from "./components/Footer";

function Layout() {
    return (
        <div className="main_layout">
            <Header />

            <Outlet />

            <Footer />
        </div>
    )
}

export default Layout;
