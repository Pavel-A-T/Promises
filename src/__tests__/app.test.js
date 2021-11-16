import GameSavingLoader from '../gameSavingLoader';
import GameSaving from '../gameSaving';

test('Проверка app.js', async () => {
  const data = '{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}';
  const userInfo = {
    id: 1, name: 'Hitman', level: 10, points: 2000,
  };
  const excpected = new GameSaving(9, 1546300800, userInfo);
  let actual = {};
  await GameSavingLoader.load(data).then((saving) => { actual = saving; });
  expect(excpected).toEqual(actual);
});
