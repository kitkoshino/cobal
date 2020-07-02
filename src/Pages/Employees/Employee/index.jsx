import React from 'react';
import './style.scss';

function Employee() {
  return (
    <section className="employee-container">
      <h2>New Employee</h2>
      <form action="">
        <div className="form-input">
          <label htmlFor="id">Employee ID:</label>
          <input type="text" name="id" />
        </div>
        <div className="form-input">
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" />
        </div>
        <div className="form-input">
          <label htmlFor="birthdate">Birthdate:</label>
          <input type="text" name="birthdate" />
        </div>
        <div className="form-input">
          <label htmlFor="address">Address:</label>
          <input type="text" name="address" />
        </div>
        <div className="form-input">
          <label htmlFor="status">Status:</label>
          <input type="text" name="status" />
        </div>
        <div className="form-input">
          <label htmlFor="position">Position:</label>
          <input type="text" name="position" />
        </div>
        <div className="form-dates">
          <div className="form-input">
            <label htmlFor="created">Created:</label>
            <input type="text" name="created" />
          </div>
          <div className="form-input">
            <label htmlFor="updated">Updated:</label>
            <input type="text" name="updated" />
          </div>
        </div>
        <button>Submit</button>
      </form>
    </section>
  );
}

export default Employee;
