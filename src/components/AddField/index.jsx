import React from 'react';
import propTypes from 'prop-types';
import './addField.css';
import makeRequest from '../../utils/makeRequest';
import { ADD_FIELD } from '../../constants/apiEndPoints';

const AddColumn = ({ view, setOpenModal }) => {
  const [newName, setNewName] = React.useState('');
  const [newType, setNewType] = React.useState('');
  const handleSubmit = async () => {
    if (localStorage.getItem('token') !== null) {
      await makeRequest(ADD_FIELD(view), { headers: { token: localStorage.getItem('token') }, data: { columnArray: [{ name: newName, type: newType }] } });
    }
    setOpenModal(false);
  };
  const handleChange = (e) => {
    setNewName(e.target.value);
  };
  const handleType = (e) => {
    setNewType(e.target.value);
  };
  return (
    <div className='entry-background'>
    <div className='create-entry-cards'>
      <div className='entry-card-headers'>
        <h1>Add new field</h1>
      </div>
      <div className='entry-card-bodies'>
        <div className='entry-card-body-field'>
          <label>Name</label>
          <input value={newName} onChange={ handleChange } type='text' required />
          <label>Type</label>
          <input value={newType} onChange={ handleType } type='text' required />
        </div>
      </div>
      <div className='entry-card-footers'>
        <p onClick={ () => setOpenModal(false)} className='entry-card-button'>Cancel</p>
        <button onClick={handleSubmit} className='entry-card-footer-button'>Update</button>
      </div>
    </div>
 </div>
  );
};

AddColumn.propTypes = {
  view: propTypes.string.isRequired,
  setOpenModal: propTypes.func.isRequired
};

export default AddColumn;
