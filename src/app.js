import GameSavingLoader from "./gameSavingLoader";

GameSavingLoader.load().then((saving) => {
  // saving объект класса GameSaving
  //const result = {id, created, userInfo} = saving;
  //resolve(result);
}, (error) => {
  // ...
});
