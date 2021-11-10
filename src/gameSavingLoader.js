import read from './reader';
import json from './parser'

export default class GameSavingLoader {
  static load() {
    return new Promise(resolve => {
      let res;
      read().then(value => {
        json(value).then(result => {
          resolve(result)
        });
      });
    })
  }
}


