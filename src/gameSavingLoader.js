import read from './reader';
import json from './parser';

export default class GameSavingLoader {
  static load(data) {
    return new Promise((resolve) => {
      read(data).then((value) => json(value))
        .then((result) => {
          resolve(JSON.parse(result));
        });
    });
  }
}
