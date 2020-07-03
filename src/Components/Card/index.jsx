import React, { useEffect } from 'react';
import Employee from '../../Pages/Employees/Employee';
import './style.scss';
import { MdEdit, MdClear } from 'react-icons/md';

function Card(props) {
  const employeeId = props.employee.id;

  useEffect(() => {
    console.log('props card',props);
  })

  return (
    <div className="card">
      <div className="card-basic-data">
        <img
          className="card-picture"
          src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
          alt=""
        />
        <div className="card-name">
          <h5>{props.employee.name}</h5>
          <p>Employee ID: <span>{props.employee.id}</span></p>
        </div>
        <div className="card-buttons">
          <MdEdit />
          <MdClear onClick={() => props.remove(props.employee.id)}/>
        </div>
      </div>
      <div className="card-all-data">
        <p>Birthdate: <span>{props.employee.birthdate}</span></p>
        <p>Address: <span>{props.employee.address}</span></p>
        <p>Status: <span>{props.employee.status}</span></p>
        <p>Position: <span>{props.employee.position}</span></p>
        <p>Created: <span>{props.employee.created}</span></p>
        <p>Updated: <span>{props.employee.updated}</span></p>
      </div>
    </div>
  );
}

export default Card;
