import GameSavingLoader from './gameSavingLoader';
import GameSaving from './gameSaving';

const userInfo = {
  id: 1, name: 'Hitman', level: 10, points: 2000,
};
const gameSaving = new GameSaving(9, 1546300800, userInfo);

GameSavingLoader.load(gameSaving).then((result) => {
  localStorage.setItem('GameSavingLoader', result);
}, (error) => { throw new Error(error); });
