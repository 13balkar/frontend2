import React from 'react';
import propTypes from 'prop-types';
import './content.css';
import makeRequest from '../../utils/makeRequest';
import { POST_CONTENT } from '../../constants/apiEndPoints';

const AddNewContent = ({ setOpenModal }) => {
  const [newName, setNewName] = React.useState('');
  const handleSubmit = async () => {
    await makeRequest(POST_CONTENT, { headers: { token: localStorage.getItem('token') }, data: { content_name: newName, columns: [] } });
    setOpenModal(false);
  };
  const handleChange = (e) => {
    setNewName(e.target.value);
  };
  return (
    <div className='entry-background'>
    <div className='create-entry-cards'>
      <div className='entry-card-headers'>
        <h1>Create a new content type</h1>
      </div>
      <div className='entry-card-bodies'>
        <div className='entry-card-body-field'>
          <label>Name of content name</label>
          <input value={newName} onChange={ handleChange } type='text' required />
        </div>
      </div>
      <div className='entry-card-footers'>
        <p onClick={ () => setOpenModal(false)} className='entry-card-button'>Cancel</p>
        <button onClick={handleSubmit} className='entry-card-footer-button'>Add</button>
      </div>
    </div>
 </div>
  );
};

AddNewContent.propTypes = {
  setOpenModal: propTypes.func.isRequired
};

export default AddNewContent;
