import {Component, OnInit} from '@angular/core';
import {IWord} from "../iword";
import {DictionaryService} from "../service/dictionary.service";

@Component({
  selector: 'app-dictionary-page',
  templateUrl: './dictionary-page.component.html',
  styleUrls: ['./dictionary-page.component.css']
})
export class DictionaryPageComponent implements OnInit {
  wordList: IWord[] = [];

  constructor(public dictionaryService: DictionaryService) {
    this.wordList = this.dictionaryService.findAll();
  }

  ngOnInit(): void {
  }

}
