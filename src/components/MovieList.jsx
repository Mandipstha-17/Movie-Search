import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ movies, favorites, toggleFavorite }) => {
  return (
    <div className="movie-list">
      <h2>Search Results</h2>
      <div className="movies-container">
        {movies.length > 0 ? (
          movies.map(movie => (
            <MovieCard
              key={movie.imdbID}
              movie={movie}
              isFavorite={favorites.some(fav => fav.imdbID === movie.imdbID)}
              toggleFavorite={toggleFavorite}
            />
          ))
        ) : (
          <p>No movies to display. Try a search!</p>
        )}
      </div>
    </div>
  );
};

export default MovieList;