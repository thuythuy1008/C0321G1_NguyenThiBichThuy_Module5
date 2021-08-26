import {Injectable} from '@angular/core';
import {IWord} from "../iword";

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  wordList: IWord[] = [
    {
      word: 'Hello',
      mean: 'Xin chao'
    },
    {
      word: 'Miss',
      mean: 'Nho'
    },
    {
      word: 'Green',
      mean: 'mau xanh la'
    },
    {
      word: 'Pen',
      mean: 'But'
    },
    {
      word: 'Book',
      mean: 'Sach'
    }];

  constructor() {
  }

  findAll() {
    return this.wordList;
  }

  findByWord(word: string) {
    return this.wordList.find(wordObj => wordObj.word === word);
  }
}
