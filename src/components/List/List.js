import React from "react";
import ListElement from "../ListElement/ListElement";

function List({ employees, sortByName }) {
  return (
    <table className="table table-info sortable" id="sortTable" style={{ width: "100%" }}>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <ListElement employees={employees}></ListElement>
    </table>
  );
}

export default List;
