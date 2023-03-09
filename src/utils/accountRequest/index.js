import axios from 'axios';

const registerRequest = async (dynamicConfig) => {
  try {
    const requestConfig = {
      url: 'http://localhost:4000/user/create',
      method: 'post',
      ...dynamicConfig
    };
    await axios(requestConfig);
    return 'success';
  } catch (error) {
    return error.response.data;
  }
};

const loginRequest = async (dynamicConfig) => {
  try {
    const requestConfig = {
      url: 'http://localhost:4000/user/login',
      method: 'post',
      ...dynamicConfig
    };
    const { data } = await axios(requestConfig);
    localStorage.setItem('token', data.token);
    return 'success';
  } catch (error) {
    console.log(error.response.data);
    return error.response.data;
  }
};

export { registerRequest, loginRequest };
