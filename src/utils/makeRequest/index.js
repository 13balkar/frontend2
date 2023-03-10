import axios from 'axios';
import { BACKEND_URL } from '../../constants/apiEndPoints';

const makeRequest = async (apiEndPoint, dynamicConfig) => {
  try {
    const requestConfig = {
      url: `${BACKEND_URL}${apiEndPoint.url}`,
      method: apiEndPoint.method,
      ...dynamicConfig
    };
    console.log(requestConfig);
    const { data } = await axios(requestConfig);
    return data;
  } catch (error) {
    console.log('error', error);
    return error;
  }
};

export default makeRequest;
