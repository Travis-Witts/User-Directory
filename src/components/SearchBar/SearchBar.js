function SearchBar ({input, handleInputChange }) {
    return (
        <input
        style={{opacity: "0.7", padding: "0 0 5px 5px"}}
        type="text"
        className="form-control"
        placeholder="Please Enter An Employees Name"
        aria-label="Name"
        value={input}
        onChange={handleInputChange}
      />
    )
}

export default SearchBar;