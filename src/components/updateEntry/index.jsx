import React from 'react';
import './updateEntry.css';
import propTypes from 'prop-types';
import makeRequest from '../../utils/makeRequest';
import { UPDATE_COLLECTION_ENTRIES } from '../../constants/apiEndPoints';
const CreateEntry = ({ view, setOpenModal, entry }) => {
  const renderFields = Object.keys(entry.entries).map((key, index) => {
    if (key !== 'id') {
      return (
        <div key={index} className='entry-card-input'>
          <p>{key}</p>
          <input type='text' defaultValue={entry.entries[key]} />
        </div>
      );
    } else {
      return (
        <div key={index} className='entry-card-input'>
          <p>{key}</p>
          <input type='text' defaultValue={entry.id} disabled />
        </div>
      );
    }
  });

  const handleSubmit = async () => {
    const inputs = document.querySelectorAll('input');
    const eData = {};
    inputs.forEach(input => {
      eData[input.previousSibling.innerHTML] = input.value;
    });
    await makeRequest(UPDATE_COLLECTION_ENTRIES(view, entry.id), { headers: { token: localStorage.getItem('token') }, data: { entryData: eData } });
    // console.log(response);
    setOpenModal(false);
  };

  return (
  <div className='entry-background'>
      <div className='create-entry-card'>
        <div className='entry-card-header'>
          <h1>Update {view}</h1>
        </div>
        <div className='entry-card-body'>
          {renderFields}
        </div>
        <div className='entry-card-footer'>
          <p onClick={ () => setOpenModal(false)} className='entry-card-button'>Cancel</p>
          <button onClick={ handleSubmit } className='entry-card-footer-button'>Add</button>
        </div>
      </div>
   </div>
  );
};

CreateEntry.propTypes = {
  view: propTypes.string.isRequired,
  setOpenModal: propTypes.func.isRequired,
  entry: propTypes.object.isRequired
};

export default CreateEntry;
