import SearchBar from "../SearchBar";

function SearchContainer({ input, handleInputChange }) {
  return (
    <div>
      <h5 style={{"textAlign": "center"}}>Search for employees here:</h5>
      <SearchBar input={input} handleInputChange={handleInputChange}></SearchBar>
    </div>
  );
}

export default SearchContainer;
