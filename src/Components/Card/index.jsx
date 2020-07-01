import React from 'react';
import './style.scss';
import { MdEdit, MdClear } from 'react-icons/md';

function Card() {
  return (
    <div className="card">
      <div className="card-basic-data">
        <img
          className="card-picture"
          src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
          alt=""
        />
        <div className="card-name">
          <h5>Bessie Berry</h5>
          <p>Employee ID:</p>
        </div>
        <div className="card-buttons">
          <MdEdit />
          <MdClear />
        </div>
      </div>
      <div className="card-all-data">
        <p>Birthdate:</p>
        <p>Address:</p>
        <p>Status:</p>
        <p>Position:</p>
        <p>Created:</p>
        <p>Updated:</p>
      </div>
    </div>
  );
}

export default Card;
