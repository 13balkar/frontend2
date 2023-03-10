import React from 'react';
import propTypes from 'prop-types';
import './content.css';
import makeRequest from '../../utils/makeRequest';
import { CHANGE_CONTENT_NAME } from '../../constants/apiEndPoints';

const ChangeContentName = ({ view, setOpenModal }) => {
  const [newName, setNewName] = React.useState('');
  const handleSubmit = async () => {
    await makeRequest(CHANGE_CONTENT_NAME(view), { headers: { token: localStorage.getItem('token') }, data: { newContentName: newName } });
    setOpenModal(false);
  };
  const handleChange = (e) => {
    setNewName(e.target.value);
  };
  return (
    <div className='entry-background'>
    <div className='create-entry-cards'>
      <div className='entry-card-headers'>
        <h1>Change content name</h1>
      </div>
      <div className='entry-card-bodies'>
        <div className='entry-card-body-field'>
          <label>New name of content name</label>
          <input value={newName} onChange={ handleChange } type='text' required />
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

ChangeContentName.propTypes = {
  view: propTypes.string.isRequired,
  setOpenModal: propTypes.func.isRequired
};

export default ChangeContentName;
