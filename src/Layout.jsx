import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./styles/Layout.scss";

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
