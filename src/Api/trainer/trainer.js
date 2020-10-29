import axios from 'axios';
import baseURL from '../base';

const TrainerApi = {
  getUngroupedTrainers: async () => {
    const result = await axios.get(`${baseURL}/trainers?grouped=false`);
    return result.data;
  },
};

export default TrainerApi;
