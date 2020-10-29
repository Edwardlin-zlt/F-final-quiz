import axios from 'axios';
import TraineeApi from './trainee';

jest.mock('axios');
jest.mock('../base', () => 'base.url.com');

describe('TraineeApi', () => {
  describe('getAllUngroupedTrainees', () => {
    it('returns trainees information on a successful response', async () => {
      const traineesData = [];
      axios.get.mockResolvedValue({ data: traineesData });

      const result = await TraineeApi.getUngroupedTrainees();

      expect(axios.get).toHaveBeenCalledWith('base.url.com/trainees?grouped=false');
      expect(result).toBe(traineesData);
    });
  });
});
