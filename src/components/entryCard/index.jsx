import React from 'react';
import propTypes from 'prop-types';
import './entryCard.css';
import UpdateEntry from '../updateEntry';
import makeRequest from '../../utils/makeRequest';
import { DELETE_COLLECTION_ENTRIES } from '../../constants/apiEndPoints';
const EntryCard = ({ entry, headings }) => {
  const [openModal, setOpenModal] = React.useState(false);
  const handleDelete = async () => {
    await makeRequest(DELETE_COLLECTION_ENTRIES(entry.collection_name, entry.id), { headers: { token: localStorage.getItem('token') } });
    // console.log(response);
  };
  return (
    <div className='entry-card'>

      { headings.map((head, index) => {
        if (head !== 'id') {
          return (
            <p key={index}>{entry.entries[head]}</p>
          );
        } else {
          return (
            <p key={index}>{entry.id}</p>
          );
        }
      })
      }
      <div className='actions'>
        <p onClick={ () => setOpenModal(true)} className='btn btn-primary'>e</p>
        <p onClick={ handleDelete } className='btn btn-danger'>d</p>
      </div>
      {openModal && <UpdateEntry view={entry.collection_name} setOpenModal={setOpenModal} entry= {entry} />}

    </div>
  );
};

EntryCard.propTypes = {
  entry: propTypes.object.isRequired,
  headings: propTypes.array.isRequired
};

export default EntryCard;
