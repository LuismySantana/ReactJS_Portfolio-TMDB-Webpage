import "../styles/MovieCard.scss";
import { Link } from "react-router-dom";


// Each movie contains the title, poster image, release date and popularity score
const MovieCard = ({id, title, imagePath, release, popularity }) => {
  return (
    <Link to={`/information/${id}`}>
        <div className="movie_card">
            <img 
                className="card_img"
                src={`https://image.tmdb.org/t/p/w500/${imagePath}`}
                alt={title}
            />
            <div className="card_information">
                <p className="card_title">{title}</p>
                <p className="card_release_date">{release}</p>
                <div className="card_popularity">
                    <span className="heading">Popularity</span> 
                    <span className="content">{popularity}</span>
                </div>
            </div>
        </div>
    </Link>
  )
}

export default MovieCard;