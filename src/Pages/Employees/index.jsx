import React from 'react';
import Card from './../../Components/Card';
import './style.scss';

function Employees() {
  return (
    <section className="employees-container">
      <h2>Team</h2>
      <div className="employees-card">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </section>
  );
}

export default Employees;
