import React from 'react';
import propTypes from 'prop-types';
const Collection = ({ view }) => {
  return (
    <div className='collection'>
      <h1>{view}</h1>
    </div>
  );
};

Collection.propTypes = {
  view: propTypes.string.isRequired
};

export default Collection;
