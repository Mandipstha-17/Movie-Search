
import MovieCard from './MovieCard';

const FavoritesList = ({ favorites, toggleFavorite }) => {
  return (
    <div className="favorites-list">
      <h2>Your Favorites ({favorites.length})</h2>
      <div className="movies-container">
        {favorites.length > 0 ? (
          favorites.map(movie => (
            <MovieCard
              key={movie.imdbID}
              movie={movie}
              isFavorite={true}
              toggleFavorite={toggleFavorite}
            />
          ))
        ) : (
          <p>You haven't added any favorites yet.</p>
        )}
      </div>
    </div>
  );
};

export default FavoritesList;