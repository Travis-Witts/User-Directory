import React from "react";
import List from "../List/List";

function ListContainer({ employees, sortByName }) {
  return (
    <div>
      <List sortByName={sortByName} employees={employees}></List>
    </div>
  );
}

export default ListContainer;
