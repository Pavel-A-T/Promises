import GameSavingLoader from "../gameSavingLoader";

test(('GameSaving...'), () => {
  const expected = {
    "id": 22, // id сохранения
    "created": 45656562, // timestamp создания
    "userInfo": {
      "id": 78, // user id
      "name": 'kkkkk', // user name
      "level": 456, // user level
      "points": 9 // user points
    }
  };
  let b = 25;
  // b = GameSavingLoader.load().then((saving) => {
  // saving объект класса GameSaving
  //  expect(saving).toEqual(expected);
  // console.log(saving);
  //return saving}),
  //(error) => {
  // ...
  //};
  b = GameSavingLoader.load();
  let c = b.then(res => c = res);
  console.log(c);



})

          //let b;
          //data.then().resolve(item => b = item);
  // console.log(b);
  //         });
