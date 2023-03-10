import React from 'react';
import './contentBuilder.css';
import ChangeContentName from '../changeContentName';
import AddColumn from '../addField';
import UpdateColumn from '../updateContentField';
import propTypes from 'prop-types';
import makeRequest from '../../utils/makeRequest';
import { GET_CONTENT_BY_NAME, DELETE_FIELD } from '../../constants/apiEndPoints';
const ContentBuilder = ({ view }) => {
  const [content, setContent] = React.useState(null);
  const [openModal, setOpenModal] = React.useState(false);
  const [openAddModal, setOpenAddModal] = React.useState(false);
  const [openUpdateModal, setOpenUpdateModal] = React.useState(null);

  const makeMap = { text: 'Aa', number: '12', email: '@ ', password: '* ', json: '{}', array: '[]', string: 'Aa' };
  const colorMap = { text: '#7691ff', string: '#7691ff', number: '#d0c121', email: '#9f6be7', password: '#ff9a76', json: '#ff9a76', array: '#ff9a76' };

  React.useEffect(() => {
    if (localStorage.getItem('token') !== null) {
      makeRequest(GET_CONTENT_BY_NAME(view.name), { headers: { token: localStorage.getItem('token') } })
        .then(response => {
          setContent(response);
        });
    }
  }, [view]);
  const changeName = async () => {
    console.log(view.name);
    setOpenModal(true);
  };
  const handleDelete = (name) => async () => {
    if (localStorage.getItem('token') !== null) {
      await makeRequest(DELETE_FIELD(view.name), { headers: { token: localStorage.getItem('token') }, data: { columnNames: [name] } });
    }
  };
  return content !== null
    ? (
    <div className='content-builder'>
      <div className='content-name'>
        <h1>{view.name}</h1>
        <img src='/assets/pencil.png' onClick={changeName} className='button-pen' />
      </div>
      <h2>{view.count} Fields</h2>
      <p className='add-types' onClick={() => setOpenAddModal(true)}>Add another field</p>
      {
        content.columns.map((item, index) => {
          return (
            <div className='content-items' key={index}>
              <div className='part1'>
              <div className='color-box' style={{ backgroundColor: colorMap[item.type] }}>
                <p>{makeMap[item.type]}</p>
              </div>
              <p>{item.name}</p>
              <p className='type'>{item.type}</p>
              </div>
              <div className='part2'>
              {view.count === 0 && <img className='buttons' src='/assets/pencil-box.png' onClick={() => setOpenUpdateModal(item.name)}/>}
              <img className='buttons' onClick= { handleDelete(item.name) } src='/assets/delete.png' />
              </div>
            </div>
          );
        })
      }
      { openModal && <ChangeContentName view={view.name} setOpenModal={setOpenModal}/>}
      { openAddModal && <AddColumn view={view.name} setOpenModal={setOpenAddModal}/>}
      { openUpdateModal && <UpdateColumn view={view.name} setOpenModal={setOpenUpdateModal} openUpdateModal={openUpdateModal}/>}
    </div>
      )
    : <div className='content-builder'>
      </div>
  ;
};

ContentBuilder.propTypes = {
  view: propTypes.object.isRequired
};
export default ContentBuilder;
