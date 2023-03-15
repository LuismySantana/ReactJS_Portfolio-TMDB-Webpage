import "../styles/Footer.scss"

// As this is only a portfolio project, the footer will have TMDB contributor of the page
const Footer = () => {

    return (
        <footer>
            <div className="sponsor_container">
                <p className="sponsor_text">Powered by:</p>
                <a href="https://www.themoviedb.org" target="_blank"><img className="sponsor_img" src="/TMDB_logo_square.svg" /></a>     
            </div>

            {/* Espace to add other footer elements */}
        </footer>  
    )
}

export default Footer;