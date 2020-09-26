import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-result-detail',
  templateUrl: './result-detail.component.html',
  styleUrls: ['./result-detail.component.css']
})
export class ResultDetailComponent implements OnInit {

  constructor() { }

  test(event: Event) {
    event.preventDefault();
    console.log("test");
  }
     

  ngOnInit(): void {
  }

}
