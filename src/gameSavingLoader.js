import read from './reader';
import json from './parser';

export default class GameSavingLoader {
  static load(data) {
    const jsonData = JSON.stringify(data);
   return new Promise((resolve) => {
      read(jsonData).then((value) => json(value))
       .then(result => resolve(result));
    });
  }
}
