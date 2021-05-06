import React, { useState, useEffect } from "react";
import searchAPI from "../../utils/API";
import SearchContainer from "../SearchContainer";
import ListContainer from "../ListContainer";
import NavBar from "../Navbar";

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
        console.log(employee);
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
      console.log(users)
    }
    fetchEmployees();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <NavBar />
      <div style={{ backgroundColor: "#4d4d4d", color: "white", padding: "0px 5px 5px 5px" }}>
        <SearchContainer
          handleInputChange={handleInputChange}
        />
        <ListContainer input={input} employees={searchData} />
      </div>
    </div>
  );
};

export default Container;
