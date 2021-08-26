import {Component, OnInit} from '@angular/core';
import {DictionaryService} from "../service/dictionary.service";
import {IWord} from "../iword";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-dictionary-detail',
  templateUrl: './dictionary-detail.component.html',
  styleUrls: ['./dictionary-detail.component.css']
})
export class DictionaryDetailComponent implements OnInit {
  wordDetail: IWord;

  constructor(private dictionaryService: DictionaryService,
              private activatedRoute: ActivatedRoute, private router: Router) {
    const word = this.activatedRoute.snapshot.params.word;

    this.wordDetail = this.dictionaryService.findByWord(word);
  }

  ngOnInit(): void {
  }

  back() {
    this.router.navigateByUrl('');
  }
}
