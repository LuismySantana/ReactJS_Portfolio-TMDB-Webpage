import "../styles/Header.scss"
import { Link, useLocation } from "react-router-dom"




const Header = () => {
    const location = useLocation();

    function isCurrentPage(pagePath) {
    return location.pathname === pagePath;
    }

    return (
        <header>
            <Link to="/" className="header_logo"><img src="./TMDB_logo_alt_short.svg" alt="The Movie DB"/></Link>
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
                    <li>
                        <Link
                            to="/profile"
                            className={isCurrentPage("/profile") ? "active" : ""}
                        >
                            My profile
                        </Link>
                    </li>
                </ul>
            </nav>

            <button className="button_log">Log in</button>
        </header>
    )
}

export default Header