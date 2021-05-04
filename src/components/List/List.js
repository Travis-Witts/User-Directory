import React from "react";
import ListElement from "../ListElement/ListElement";

function List({ employees }) {
  return (
    <table className="table table-secondary sortable" id="sortTable" style={{ width: "100%" }}>
      <thead>
        <tr className="text-light bg-dark">
          <th style={{"cursor" : "pointer"}}>First Name</th>
          <th style={{"cursor" : "pointer"}}>Last Name</th>
          <th style={{"cursor" : "pointer"}}>Email</th>
        </tr>
      </thead>
      <ListElement employees={employees}></ListElement>
    </table>
  );
}

export default List;
