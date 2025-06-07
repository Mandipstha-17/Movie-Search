
const MovieCard = ({ movie, isFavorite, toggleFavorite }) => {
  return (
    <div className="movie-card">
      <img
        src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/300x450?text=No+Poster'}
        alt={movie.Title}
      />
      <div className="movie-info">
        <h3>{movie.Title}</h3>
        <p>Year: {movie.Year}</p>
        <button 
          onClick={() => toggleFavorite(movie)}
          className={isFavorite ? 'remove' : 'add'}
        >
          {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
        </button>
      </div>
    </div>
  );
};

export default MovieCard;