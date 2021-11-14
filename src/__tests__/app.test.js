import GameSavingLoader from '../gameSavingLoader';
import GameSaving from '../gameSaving';

test('Проверка app.js', async () => {
  const expectedString = '{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}';
  const userInfo = {
    id: 1, name: 'Hitman', level: 10, points: 2000,
  };
  const gameSaving = new GameSaving(9, 1546300800, userInfo);
  let gameSavingObj = {};
  await GameSavingLoader.load(gameSaving).then((saving) => { gameSavingObj = saving; });
  expect(gameSavingObj).toEqual(expectedString);
});
