import axios from 'axios';
import baseURL from '../base';

const TraineeApi = {
  getAll: async () => {
    const result = await axios.get(`${baseURL}/trainees`);
    return result.data.trainees;
  },
  getUngroupedTrainees: async () => {
    const result = await axios.get(`${baseURL}/trainees?grouped=false`);
    return result.data;
  },
};

export default TraineeApi;
