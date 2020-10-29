import axios from 'axios';
import baseURL from '../base';

const TraineeApi = {
  getUngroupedTrainees: async () => {
    const result = await axios.get(`${baseURL}/trainees?grouped=false`);
    return result.data;
  },
};

export default TraineeApi;
