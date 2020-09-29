import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-manual-page',
  templateUrl: './add-manual-page.component.html',
  styleUrls: ['./add-manual-page.component.css']
})
export class AddManualPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  public pageContent = {
    header: {
      title: 'Add a Manual or Textbook',
      strapline: ''
    },
   
  };

}