import "../styles/Footer.scss"

// As this is only a testing project, the footer will have TMDB and 2Coders as contributors of the page
const Footer = () => {

    return (
        <footer>
            <div className="sponsor_container">
                <p className="sponsor_label">Powered by:</p>
                <a href="https://www.themoviedb.org" target="_blank"><img className="sponsor_img" src="/TMDB_logo_square.svg" alt="" /></a>     
            </div>

            <div className="sponsor_container">
                <p className="sponsor_label">Sponsored by:</p>
                <a href="https://www.2coders.com" target="_blank"><img className="sponsor_img" src="/2coders_favicon.png" alt="" /></a>     
            </div>
        </footer>  
    )
}

export default Footer;