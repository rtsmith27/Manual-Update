import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  public pageContent = {
    header: {
      // title: 'Manual Update:',
      strapline: 'Need an update, use an update. Have an update, leave an update. '
    }
  };

}
