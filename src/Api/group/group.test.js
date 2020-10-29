import axios from "axios";
import GroupApi from "./group";

jest.mock('axios');
jest.mock('../base', () => 'base.url.com');

describe('GroupApi', () => {
    describe('getGroups', () => {
        it('returns groups information on a successful response', async () => {
            const groupsData = [];
            axios.get.mockResolvedValue({data: groupsData});

            const result = await GroupApi.getGroups();

            expect(axios.get).toHaveBeenCalledWith('base.url.com/groups');
            expect(result).toBe(groupsData);
        });
    });
});
