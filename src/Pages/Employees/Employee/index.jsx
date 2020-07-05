import React, { useState, useEffect } from 'react';
import { create, getEmployee, edit } from '../../../services/teams';
import { useHistory } from 'react-router-dom';
import './style.scss';

const Employee = (props) => {
  const [formValues, setFormValues] = useState({
    id: '',
    name: '',
    birthdate: '',
    address: '',
    status: '',
    position: '',
    created: '',
    updated: ''
  });

  const history = useHistory();

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (props?.match?.params?.id) {
      edit(formValues)
        .then(() => history.push('/employees'))
        .catch((error) => console.log(error));
    } else {
      create(formValues)
        .then(() => history.push('/employees'))
        .catch((error) => {
          console.log(error);
        });
    }
  }

  useEffect(() => {
    if (props?.match?.params?.id) {
      getEmployee(props.match.params.id).then((res) => {
        setFormValues({...res});
      });
    } else {
      setFormValues({
        id: '',
        name: '',
        birthdate: '',
        address: '',
        status: '',
        position: '',
        created: '',
        updated: ''
      });
    }
  }, [props]);

  return (
    <section className="employee-container">
      <h2>New Employee</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-input">
          <label htmlFor="id">Employee ID:</label>
          <input type="text" name="id" value={formValues.id} placeholder="automatically filled" disabled />
        </div>
        <div className="form-input">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            onChange={handleInputChange}
            value={formValues.name}
          />
        </div>
        <div className="form-input">
          <label htmlFor="birthdate">Birthdate:</label>
          <input
            type="date"
            name="birthdate"
            id="input-birthdate"
            onChange={handleInputChange}
            value={formValues.birthdate}
          />
        </div>
        <div className="form-input">
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            name="address"
            onChange={handleInputChange}
            value={formValues.address}
          />
        </div>
        <div className="form-input">
          <label htmlFor="status">Status:</label>
          <input
            type="text"
            name="status"
            onChange={handleInputChange}
            value={formValues.status}
          />
        </div>
        <div className="form-input">
          <label htmlFor="position">Position:</label>
          <input
            type="text"
            name="position"
            onChange={handleInputChange}
            value={formValues.position}
          />
        </div>
        <div className="form-dates">
          <div className="form-input">
            <label htmlFor="created">Created:</label>
            <input
              type="date"
              name="created"
              value={formValues.created.substr(0, 10)}
              disabled
            />
          </div>
          <div className="form-input">
            <label htmlFor="updated">Updated:</label>
            <input
              type="date"
              name="updated"
              value={formValues.updated.substr(0, 10)}
              disabled
            />
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default Employee;
