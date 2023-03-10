import React from 'react';
import propTypes from 'prop-types';
import './content.css';
import makeRequest from '../../utils/makeRequest';
import { UPDATE_FIELD } from '../../constants/apiEndPoints';

const UpdateColumn = ({ view, setOpenModal, openUpdateModal }) => {
  const oldName = openUpdateModal;
  const [newName, setNewName] = React.useState('');
  const handleSubmit = async () => {
    if (localStorage.getItem('token') !== null) {
      await makeRequest(UPDATE_FIELD(view), { headers: { token: localStorage.getItem('token') }, data: { columnArray: [{ oldName, newName }] } });
    }
    setOpenModal(null);
  };
  const handleChange = (e) => {
    setNewName(e.target.value);
  };
  return (
    <div className='entry-background'>
    <div className='create-entry-cards'>
      <div className='entry-card-headers'>
        <h1>Update Field</h1>
      </div>
      <div className='entry-card-bodies'>
        <div className='entry-card-body-field'>
          <label>New name</label>
          <input value={newName} onChange={ handleChange } type='text' required />
        </div>
      </div>
      <div className='entry-card-footers'>
        <p onClick={ () => setOpenModal(null)} className='entry-card-button'>Cancel</p>
        <button onClick={handleSubmit} className='entry-card-footer-button'>Update</button>
      </div>
    </div>
 </div>
  );
};

UpdateColumn.propTypes = {
  view: propTypes.string.isRequired,
  setOpenModal: propTypes.func.isRequired,
  openUpdateModal: propTypes.string.isRequired
};

export default UpdateColumn;
