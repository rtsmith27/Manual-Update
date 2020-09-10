import { Component, OnInit } from '@angular/core';

export class Result {
  _id: string;
  title: string;
  edition: string;
  author: string[];
  publisher: string;
  isbn: number;
  lastUpdate: number;
  updateCount: number;
  updates: object /*?, or string*/
}

@Component({
  selector: 'app-result-list',
  templateUrl: './result-list.component.html',
  styleUrls: ['./result-list.component.css']
})
export class ResultListComponent implements OnInit {

  constructor() { }

  results: Result []= [{
    _id: '5f57fb595ee252e390ee4db2',
    title: 'Getting MEAN with Mongo, Express, Angular and Node',
    edition: 'Second Edition',
    author: ['Simon Holmes', 'Clive Harber'],
    publisher: 'Manning',
    isbn: 9781617294754,
    lastUpdate: 2020-7-19,
    updateCount: 23,
    updates:{
    updateCount: 0,
    chapter: '12',
    updater: 'testUpdater',
    votes: 0,
    section: '12.2.5',
    updateText: 'paragraph will be here',
    createdOn: '2019-12-09'
    }, {

    }
}];

  ngOnInit() {
  }

}
