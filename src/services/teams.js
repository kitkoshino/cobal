import axios from 'axios';

const baseTeamsServices = axios.create({
  baseURL: '/teams'
});

//list
const list = () => {
  return baseTeamsServices
    .get('')
    .then((response) => {
      return Promise.resolve(response.data);
    })
    .catch((error) => Promise.reject(error));
};
//create
const create = (employee) => {
  return baseTeamsServices
    .post('', employee)
    .then((response) => {
      return Promise.resolve();
    })
    .catch((error) => Promise.reject(error));
};

//edit
const edit = (employee) => {
  return baseTeamsServices
    .patch(`/${employee.id}`, employee)
    .then((response) => {
      return Promise.resolve(response.data);
    })
    .catch((error) => Promise.reject(error));
};

//delete
const remove = (employeeId) => {
  return baseTeamsServices
    .delete(`/${employeeId}`)
    .then((response) => {
      return Promise.resolve();
    })
    .catch((error) => Promise.reject(error));
};

export { list, create, edit, remove };
