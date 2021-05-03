import SearchBar from "../SearchBar/SearchBar";

function SearchContainer({ input, handleInputChange }) {
  return (
    <div>
      <h1 style={{"textAlign": "center"}}>Search for employees here:</h1>
      <SearchBar input={input} handleInputChange={handleInputChange}></SearchBar>
    </div>
  );
}

export default SearchContainer;
