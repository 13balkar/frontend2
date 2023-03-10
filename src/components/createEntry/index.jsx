import React from 'react';
import './createEntry.css';
import propTypes from 'prop-types';
import makeRequest from '../../utils/makeRequest';
import { GET_CONTENT_BY_NAME, POST_COLLECTION_ENTRIES } from '../../constants/apiEndPoints';
const CreateEntry = ({ view, setOpenModal }) => {
  const [fields, setFeilds] = React.useState(null);
  React.useEffect(() => {
    makeRequest(GET_CONTENT_BY_NAME(view), { headers: { token: localStorage.getItem('token') } })
      .then(response => {
        const columns = response.columns;
        const fields = columns.map(column => column.name);
        setFeilds(fields);
      });
  }, [view]);

  const renderFields = (
    fields !== null && fields.map((field, index) => {
      return (
        <div key={index} className='entry-card-body-field'>
          <label>{field}</label>
          <input key={field} type='text' required />
        </div>
      );
    })
  );

  const handleSubmit = async () => {
    const inputs = document.querySelectorAll('input');
    const eData = {};
    inputs.forEach(input => {
      eData[input.previousSibling.innerHTML] = input.value;
    });
    const response = await makeRequest(POST_COLLECTION_ENTRIES(view), { headers: { token: localStorage.getItem('token') }, data: { entryData: eData } });
    console.log(response);
  };

  return (
  <div className='entry-background'>
      <div className='create-entry-card'>
        <div className='entry-card-header'>
          <h1>New {view}</h1>
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
  setOpenModal: propTypes.func.isRequired
};

export default CreateEntry;
