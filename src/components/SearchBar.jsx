
const SearchBar = ({ searchTerm, setSearchTerm, handleSearch }) => {
  return (
    <form onSubmit={handleSearch} className="search-bar">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search for movies..."
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;