import axios from 'axios';
import TrainerApi from './trainer';

jest.mock('axios');
jest.mock('../base', () => 'base.url.com');

describe('TrainerApi', () => {
    describe('getAllUngroupedTrainers', () => {
        it('returns trainers information on a successful response', async () => {
            const trainersData = [];
            axios.get.mockResolvedValue({ data: trainersData });

            const result = await TrainerApi.getUngroupedTrainers();

            expect(axios.get).toHaveBeenCalledWith('base.url.com/trainers?grouped=false');
            expect(result).toBe(trainersData);
        });
    });
});
