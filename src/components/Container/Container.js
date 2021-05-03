import React, { useState, useEffect } from "react";
import searchAPI from "../../utils/API";
import SearchContainer from "../SearchContainer/SearchContainer";
import ListContainer from "../ListContainer/ListContainer";

function Container() {
  const [employees, setEmployees] = useState([]);
  const [searchData, setSearch] = useState([]);
  const [input, setInput] = useState("");

  let handleInputChange = (event) => {
    event.preventDefault();
    setInput(event.target.value);
    let matches = employees.filter((employee) => {
        let name = employee.name.first.toLowerCase();
        let search = input.toLowerCase();
      if (name.startsWith(search)) {
        return employee;
      }
    });
    setSearch(matches);
  };


  useEffect(() => {
    async function fetchEmployees() {
      searchAPI().then((res) => setEmployees(res.results));
    }
    fetchEmployees();
  }, []);

  return (
    <div>
      <SearchContainer handleInputChange={handleInputChange}></SearchContainer>
      {/* <ListContainer ></ListContainer> */}
    </div>
  );
}

export default Container;