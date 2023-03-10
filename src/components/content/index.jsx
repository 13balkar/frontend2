import React from 'react';
import './content.css';
import makeRequest from '../../utils/makeRequest';
import AddNewContent from '../AddNewContent';
import ContentBuilder from '../contentBuilder';
import { GET_COLLECTIONS, GET_CONTENTS } from '../../constants/apiEndPoints';
const Content = () => {
  const [names, setNames] = React.useState(null);
  const [view, setView] = React.useState(null);
  const [openModal, setOpenModal] = React.useState(false);
  React.useEffect(() => {
    if (localStorage.getItem('token') !== null) {
      const unique = {};
      makeRequest(GET_COLLECTIONS, { headers: { token: localStorage.getItem('token') } })
        .then(response => {
          response = response.map(item => item.collection_name);
          // const unique = {};
          response.forEach(item => {
            if (!unique[item]) {
              unique[item] = 1;
            } else {
              unique[item] += 1;
            }
          });

          makeRequest(GET_CONTENTS, { headers: { token: localStorage.getItem('token') } })
            .then(res => {
              res = res.map(itemName => itemName.content_name);
              res.map(itemName => {
                if (!unique[itemName]) {
                  unique[itemName] = 0;
                }
                return unique;
              }
              );
            }
            );
          setNames(unique);
        });
    }
  }, []);
  console.log(names);
  const handleAdd = () => {
    setOpenModal(true);
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
          <img className='button' src='/assets/icon-search-dark.png' />
          </div>
          <p className='add-type'onClick={handleAdd} >+ New Type</p>
          { Object.keys(names).map((item, index) => {
            return (
                <div className='content-item' onClick={() => setView({ name: item, count: names[item] })} key={index}>
                  <p>{item}</p>
                  <p>{names[item]}</p>
                </div>
            );
          })
          }
        </div>
        { view && <ContentBuilder view={view} /> }
      </div>
      { openModal && <AddNewContent setOpenModal={setOpenModal} /> }
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
