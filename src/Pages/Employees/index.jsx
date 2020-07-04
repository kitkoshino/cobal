import React, { useEffect, useState } from 'react';
import { list, remove } from '../../services/teams';
import Card from './../../Components/Card';
import './style.scss';

const Employees = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    list()
      .then((result) => {
        setEmployees(result);
      })
      .catch((error) => {
        console.log(error);
        // TODO: Apresentar mensagem
      });
  }, []);

  function deleteEmployee(employeeId) {
    remove(employeeId)
      .then(() => {
        const employeesUpdated = employees.filter(
          (item) => item.id !== employeeId
        );
        setEmployees(employeesUpdated);
      })
      .catch((error) => console.log(error));
  }

  return (
    <section className="employees-container">
      <h2>Team</h2>
      <div className="employees-card">
        {employees.map((employee) => (
          <Card key={employee.id} employee={employee} remove={deleteEmployee} />
        ))}
      </div>
    </section>
  );
};

export default Employees;
