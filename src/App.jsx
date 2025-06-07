import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import MovieList from './components/MovieList';
import FavoritesList from './components/FavoritesList';
import './App.css';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [movies, setMovies] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showFavorites, setShowFavorites] = useState(false);

  // Load favorites 
  useEffect(() => {
    const savedFavorites = localStorage.getItem('movieFavorites');
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }
    // Initial search
    searchMovies('Pirates of the Caribbean');
  }, []);

  // Save favorites to localStorage 
  useEffect(() => {
    localStorage.setItem('movieFavorites', JSON.stringify(favorites));
  }, [favorites]);

  // Fetch movies from API
  const searchMovies = async (term) => {
    setIsLoading(true);
    setError(null);
    
    try {
      // Using Vite's import.meta.env 
      const apiKey = import.meta.env.VITE_OMDB_API_KEY;
      if (!apiKey) {
        throw new Error('API key not configured');
      }
      
      const response = await axios.get(
        `https://www.omdbapi.com/?apikey=${apiKey}&s=${term}`
      );
      
      if (response.data.Response === 'True') {
        setMovies(response.data.Search);
      } else {
        setError(response.data.Error || 'No movies found');
        setMovies([]);
      }
    } catch (err) {
      setError(err.message || 'Failed to fetch movies. Please try again.');
      setMovies([]);
    } finally {
      setIsLoading(false);
    }
  };

  // Handle search submission
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      searchMovies(searchTerm);
    }
  };

  // Add or remove movie from favorites
  const toggleFavorite = (movie) => {
    const isFavorite = favorites.some(fav => fav.imdbID === movie.imdbID);
    
    if (isFavorite) {
      setFavorites(favorites.filter(fav => fav.imdbID !== movie.imdbID));
    } else {
      setFavorites([...favorites, movie]);
    }
  };

  return (
    <div className="app">
      <h1>Movie Search</h1>
      
      <SearchBar 
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        handleSearch={handleSearch}
      />
      
      <button 
        className="toggle-btn"
        onClick={() => setShowFavorites(!showFavorites)}
      >
        {showFavorites ? 'Show Search Results' : 'Show Favorites'}
      </button>
      
      {isLoading && <div className="loading">Loading...</div>}
      {error && <div className="error">{error}</div>}
      
      {showFavorites ? (
        <FavoritesList 
          favorites={favorites} 
          toggleFavorite={toggleFavorite} 
        />
      ) : (
        <MovieList 
          movies={movies} 
          favorites={favorites} 
          toggleFavorite={toggleFavorite} 
        />
      )}
    </div>
  );
};

export default App;