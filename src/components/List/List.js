import React from "react";
import ListElement from "../ListElement/ListElement";

function List({ employees }) {
  return (
    <table className="table table-warning sortable" id="sortTable" style={{ width: "100%" }}>
      <thead>
        <tr className="text-light bg-dark">
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
