import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resultspage',
  templateUrl: './resultspage.component.html',
  styleUrls: ['./resultspage.component.css']
})
export class ResultspageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public pageContent = {
    header: {
      title: '',
      strapline: 'Need an update, use an update. Have an update, leave an update. '
    }
  };

}
