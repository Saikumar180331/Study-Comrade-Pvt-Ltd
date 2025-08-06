import React, { useState } from 'react';

function Task21() {
  const [employees] = useState([
    { name: "Alice", age: 30, salary: 50000, designation: "Manager" },
    { name: "Bob", age: 25, salary: 40000, designation: "Developer" }
  ]);

  return (
    <div>
      <h2>Employee List</h2>
      <ul>
        {employees.map((emp, i) => (
          <li key={i}>
            {emp.name} - {emp.age} - {emp.salary} - {emp.designation}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Task21;
