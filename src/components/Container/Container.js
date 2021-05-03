import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import SearchContainer from "../SearchContainer/SearchContainer";
import ListContainer from "../ListContainer/ListContainer";

function Container() {
  const [employees, setEmployees] = useState([]);
  const [searchData, setSearch] = useState([]);
  const [input, setInput] = useState("");

  handleInputChange = (event) => {
    event.preventDefault();
    setInput(event.target.value);
    let matches = employees.filter((employee) => {
      if (employee.name.first.startsWith(input)) {
        return employee;
      }
    });
    setSearch(matches);
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
  };

  useEffect(() => {
    async function fetchEmployees() {
      API.search().then((res) => this.setState({ employees: res.results }));
    }
    fetchEmployees();
  }, []);

  return (
    <div>
      <SearchContainer handleInputChange={handleInputChange}></SearchContainer>
      <ListContainer employees={this.state.employees}></ListContainer>
    </div>
  );
}

API.search().then((res) => this.setState({ employees: res.results }));
