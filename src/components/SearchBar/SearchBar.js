function SearchBar ({input, handleChange }) {
    return (
        <input
        type="text"
        className="form-control"
        placeholder="Please Enter An Employees Name"
        aria-label="Name"
        value={input}
        onChange={handleChange}
      />
    )
}

export default SearchBar;