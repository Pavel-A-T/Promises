import GameSavingLoader from '../gameSavingLoader';
import GameSaving from '../gameSaving';

test(('GameSaving...'), () => {
  const userInfo = {
    id: 1, name: 'Hitman', level: 10, points: 2000,
  };
  const expected = new GameSaving(9, 1546300800, userInfo);
  const data = '{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}';
  return GameSavingLoader.load(data).then((result) => {
    expect(result).toEqual(expected);
  });
});
