import axios from 'axios';
import TraineeApi from './trainee';

jest.mock('axios');
jest.mock('./base', () => 'base.url.com');

describe('TraineeApi', () => {
  describe('getAllTrainees', () => {
    it('returns trainees information on a successful response', async () => {
      const traineesData = [];
      axios.get.mockResolvedValue({ data: { trainees: traineesData } });

      const result = await TraineeApi.getAll();

      expect(axios.get).toHaveBeenCalledWith('base.url.com/trainees');
      expect(result).toBe(traineesData);
    });
  });
});
