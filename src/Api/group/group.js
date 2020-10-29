import axios from 'axios';
import baseURL from '../base';

const GroupApi = {
  getGroups: async () => {
    const result = await axios.get(`${baseURL}/groups`);
    return result.data;
  },
};

export default GroupApi;
