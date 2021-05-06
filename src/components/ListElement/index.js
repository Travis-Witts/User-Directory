import React from "react";

function ListElement({ employees }) {
  return (
    <tbody >
      {employees.map((employee) => (
        <tr key={employee.email}>
          <td>{employee.name.first}</td>
          <td>{employee.name.last}</td>
          <td>{employee.email}</td>
        </tr>
      ))}
    </tbody>
  );
}

export default ListElement;
