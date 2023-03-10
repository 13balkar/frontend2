export const BACKEND_URL = 'http://localhost:8000';

export const GET_CONTENTS = {
  url: '/content',
  method: 'get'
};

export const GET_CONTENT_BY_NAME = (name) => ({
  url: `/content/${name}`,
  method: 'get'
});

export const POST_CONTENT = {
  url: '/content/addContent',
  method: 'post'
};

export const CHANGE_CONTENT_NAME = (name) => ({
  url: `/content/${name}/changeName`,
  method: 'patch'
});

export const COLLECTION_ENTRIES = (name) => ({
  url: `/collection/${name}`,
  method: 'get'
});

export const POST_COLLECTION_ENTRIES = (name) => ({
  url: `/collection/${name}`,
  method: 'post'
});

export const DELETE_COLLECTION_ENTRIES = (name, id) => ({
  url: `/collection/${name}/${id}`,
  method: 'delete'
});

export const UPDATE_COLLECTION_ENTRIES = (name, id) => ({
  url: `/collection/${name}/${id}`,
  method: 'put'
});

export const GET_COLLECTIONS = {
  url: '/collection',
  method: 'get'
};
