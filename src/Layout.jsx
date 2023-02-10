import { Outlet } from "react-router-dom";

function Layout() {

    return (
        <div className="main_layout">
            <h1>Main Layout</h1>

            <Outlet />
            
        </div>
    )
}

export default Layout;
