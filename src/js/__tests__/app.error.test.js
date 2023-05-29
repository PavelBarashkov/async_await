/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
import GameSavingLoader from '../GameSavingLoader';

test('savingLoader error', async () => {
    expect
    try {
        const data =  await GameSavingLoader.load();
    } catch(e) {
        expect(e.massage).toEqual('error')
    }
});
