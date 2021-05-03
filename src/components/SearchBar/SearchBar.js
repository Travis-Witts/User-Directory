function SearchBar ({input, handleInputChange }) {
    return (
        <input
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