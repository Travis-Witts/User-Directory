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
      let search = event.target.value.toLowerCase();
      if (name.includes(search)) {
        console.log(employee)
        return true;
      }
      return false;
    });
    setSearch(matches);
  };

  useEffect(() => {
    async function fetchEmployees() {
      let users = await searchAPI();
      setEmployees(users.data.results);
      setSearch(users.data.results);
    }
    fetchEmployees();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div style={{ backgroundColor: "darkgray", padding: "0px 5px 5px 5px" }}>
      <SearchContainer handleInputChange={handleInputChange}></SearchContainer>
      <ListContainer input={input} employees={searchData}></ListContainer>
    </div>
  );
}

export default Container;
