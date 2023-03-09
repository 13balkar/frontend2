import React from 'react';
import propTypes from 'prop-types';
import './entryCard.css';
const EntryCard = ({ entry, headings }) => {
  return (
    <div className='entry-card'>

      { headings.map((head, index) => {
        if (head !== 'id') {
          return (
            <td key={index}>{entry.entries[head]}</td>
          );
        } else {
          return (
            <td key={index}>{entry.id}</td>
          );
        }
      })
      }
      <div className='actions'>
        <p className='btn btn-primary'>e</p>
        <p className='btn btn-danger'>d</p>
      </div>

    </div>
  );
};

EntryCard.propTypes = {
  entry: propTypes.object.isRequired,
  headings: propTypes.array.isRequired
};

export default EntryCard;
