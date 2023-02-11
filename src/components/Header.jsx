import { Link, useLocation } from "react-router-dom";
import ButtonLog from "./ButtonLog";
import { useState } from "react";
import "../styles/Header.scss";
import useAuthentication from "../hooks/useAuthentication";


const Header = () => {
    // State to control menu on responsive
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Context for login simulation
    const { authentication, userLogin, userLogout } = useAuthentication();
    
    const location = useLocation();

    // Function to control current page for the nav buttons
    function isCurrentPage(pagePath) {
        return location.pathname === pagePath;
    }

    // Header menu button handler (for responsive design)
    function handleToggle() {
        setIsMenuOpen(!isMenuOpen);
    }
    

    return (
        <header className={isMenuOpen ? "opened" : ""}>
            <div className="header_logo_toggler_container">
                <Link to="/" className="header_logo"><img src="/TMDB_logo_alt_short.svg" alt="The Movie DB"/></Link>
                
                <button
                    className="header_menu_toggler"
                    onClick={handleToggle}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-menu-2" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <line x1="4" y1="6" x2="20" y2="6" />
                        <line x1="4" y1="12" x2="20" y2="12" />
                        <line x1="4" y1="18" x2="20" y2="18" />
                    </svg>
                </button>
            </div>
            
            <nav>
                <ul>
                    <li>
                        <Link 
                            to="/"
                            className={isCurrentPage("/") ? "active" : ""}
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/popular"
                            className={isCurrentPage("/popular") ? "active" : ""}
                        >
                            Most popular
                        </Link>
                    </li>
                    
                    {authentication?.logged && (
                        <li>
                            <Link
                                to="/profile"
                                className={isCurrentPage("/profile") ? "active" : ""}
                            >
                                My profile
                            </Link>
                        </li>
                    )}
                        
                </ul>
            </nav>

            {!authentication?.logged ? (
                <ButtonLog 
                    label="Log in"
                    hoverClass="login"
                    clickAction={userLogin}
                />
            ):(
                <ButtonLog 
                    label="Log out"
                    hoverClass="logout"
                    clickAction={userLogout}
                />
            )}
            
            
        </header>
    )
}

export default Header;