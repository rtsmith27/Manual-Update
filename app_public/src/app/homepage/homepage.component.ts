import { Component, OnInit } from '@angular/core';
// import { mongo? } from 'db.js'

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

public mongoSearch(): void {
  // get userQueryString from html form input

  // connect to mongo db
  // results[] = mongo.connect(this.userQueryString)

  // send search variable to mongo find

  // parse results

  // return to html
}


}
