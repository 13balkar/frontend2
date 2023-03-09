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
