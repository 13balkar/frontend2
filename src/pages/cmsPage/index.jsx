import React from 'react';
import './cms.css';
import Navbar from '../../components/navbar';
import Collection from '../../components/collection';
import Content from '../../components/content';
const Cms = () => {
  const [view, setView] = React.useState('content');
  const handleView = (view) => {
    setView(view);
  };

  return (
    <div className='cms'>
      <Navbar setView={ handleView } view={ view } />
      { view === 'content' ? <Content /> : <Collection view={ view }/> }
    </div>
  );
};

export default Cms;
