import React from 'react';
import { MdClear, MdEdit } from 'react-icons/md';
import { Link } from 'react-router-dom';
import './style.scss';

function Card(props) {
 
  return (
    <div className="card">
      <div className="card-basic-data">
        <img
          className="card-picture"
          src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
          alt="employee"
        />
        <div className="card-name">
          <h5>{props.employee.name}</h5>
          <p>
            Employee ID: <span>{props.employee.id}</span>
          </p>
        </div>
        <div className="card-buttons">
          <Link to={{pathname:`/employee/${props.employee.id}`}}>
            <MdEdit />
          </Link>
          <MdClear onClick={() => props.remove(props.employee.id)} />
        </div>
      </div>
      <div className="card-all-data">
        <p>
          Birthdate: <span>{props.employee.birthdate}</span>
        </p>
        <p>
          Address: <span>{props.employee.address}</span>
        </p>
        <p>
          Status: <span>{props.employee.status}</span>
        </p>
        <p>
          Position: <span>{props.employee.position}</span>
        </p>
        <p>
          Created: <span>{props.employee.created.substr(0, 10)}</span>
        </p>
        <p>
          Updated: <span>{props.employee.updated.substr(0, 10)}</span>
        </p>
      </div>
    </div>
  );
}

export default Card;
