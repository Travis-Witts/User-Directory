import SearchBar from "../SearchBar/SearchBar";

function SearchContainer({ input, handleInputChange }) {
  return (
    <div>
      <h1>Search for employees here:</h1>
      <SearchBar input={input} handleInputChange={handleInputChange}></SearchBar>
    </div>
  );
}

export default SearchContainer;
