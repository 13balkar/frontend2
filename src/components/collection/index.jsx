import React from 'react';
import propTypes from 'prop-types';
import EntryCard from '../entryCard';
import CreateEntry from '../createEntry';
import makeRequest from '../../utils/makeRequest';
import { COLLECTION_ENTRIES } from '../../constants/apiEndPoints';
import './collection.css';
const Collection = ({ view }) => {
  const [entries, setEntries] = React.useState(null);
  const [openModal, setOpenModal] = React.useState(false);
  React.useEffect(() => {
    if (localStorage.getItem('token') !== null) {
      makeRequest(COLLECTION_ENTRIES(view), { headers: { token: localStorage.getItem('token') } })
        .then(response => {
          setEntries(response);
        });
    }
  }, [view]);

  const setHeadingValues = () => {
    const values = ['id'];
    const val = (entries !== null && entries.length > 0) ? Object.keys(entries[0].entries) : null;
    values.push(...val);
    if (values !== null && values.length > 4) {
      values.length = 4;
    }
    return values;
  };

  const headings = (
    <div className='headings'>
      <div className='heading-names'>
      {
        entries !== null && entries.length > 0 && setHeadingValues(entries).map((item, index) => {
          return (
            <p key={index}>{item}</p>
          );
        })
      }
      </div>
      <p>Actions</p>
    </div>
  );

  return entries !== null
    ? (
      <div className='collection'>
        <div className='collection-name'>
          <h1>{view}</h1>
        </div>
        <div className='add-new'>
          <h1>{entries.length} Entries Found</h1>
          <p onClick={ () => setOpenModal(true) } >Add a new Entry</p>
        </div>
        { entries.length > 0 && headings}
        { entries.length > 0 && entries.map((entry, index) => {
          return (
            <EntryCard key={index} entry={entry} headings={setHeadingValues(entries)} />
          );
        })}
        { openModal && <CreateEntry view={view} setOpenModal={setOpenModal}/>}
      </div>
      )
    : (
      <div className='collection'>
        <div className='collection-name'>
          <h1>{view}</h1>
        </div>
      </div>
      );
};

Collection.propTypes = {
  view: propTypes.string.isRequired
};

export default Collection;
