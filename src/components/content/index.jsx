import React from 'react';
import './content.css';
import makeRequest from '../../utils/makeRequest';
import { GET_COLLECTIONS } from '../../constants/apiEndPoints';
const Content = () => {
  const [names, setNames] = React.useState(null);
  const [view, setView] = React.useState(null);
  React.useEffect(() => {
    if (localStorage.getItem('token') !== null) {
      makeRequest(GET_COLLECTIONS, { headers: { token: localStorage.getItem('token') } })
        .then(response => {
          response = response.map(item => item.collection_name);
          const unique = {};
          response.forEach(item => {
            if (!unique[item]) {
              unique[item] = 1;
            } else {
              unique[item] += 1;
            }
          });
          setNames(unique);
        });
    }
  }, []);
  const handleAdd = () => {
    setView(null);
  };
  return names !== null
    ? (
    <div className='contents'>
      <div className='content-heading'>
        <h1>Content Types</h1>
      </div>
      <div className='content-body'>
        <div className='content-list'>
          <div className='content-number'>
          <p>{ Object.keys(names).length } Types</p>
          <p>s</p>
          </div>
          <p className='add-type'onClick={handleAdd} >+ New Type</p>
          { Object.keys(names).map((item, index) => {
            return (
                <div className='content-item' onClick={() => setView(item)} key={index}>
                  <p>{item}</p>
                  <p>{names[item]}</p>
                </div>
            );
          })
          }
        </div>
        { view && <div className='content-builder'>
          <h1>Hello</h1>
        </div>}
      </div>
    </div>
      )
    : (
    <div className='contents'>
      <div className='content-heading'>
        <h1>Content Types</h1>
      </div>
      <div className='content-body'>
        <div className='content-list'>
        </div>
        <div className='content-builder'>
        </div>
      </div>
    </div>
      );
};

export default Content;
