import React from "react";
import List from "../List";

function ListContainer({ employees, sortByName }) {
  return (
    <div>
      <List className="px-5" employees={employees}></List>
    </div>
  );
}

export default ListContainer;
