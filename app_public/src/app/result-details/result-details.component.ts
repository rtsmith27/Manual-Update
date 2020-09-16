import { Component, OnInit, Input } from '@angular/core';
import { Result, Update } from '../result' /*'../result-list/result-list.component'*/;
import { ManualUpdateDataService } from '../manual-update-data.service'
import * as $ from "jquery";

@Component({
  selector: 'app-result-details',
  templateUrl: './result-details.component.html',
  styleUrls: ['./result-details.component.css']
})
export class ResultDetailsComponent implements OnInit {

  @Input() result: Result;

  public newUpdate: Update = {
    chapter: '',
    updater: '',
    votes: 5,
    section: '',
    updateText: '',
    createdOn: '',
    updateCount: 7
  };

  public formVisible: boolean = false;
  public formError: string;

  constructor(private manualUpdateDataService: ManualUpdateDataService) { }

  ngOnInit() {
  }

}

$(function() {

  $('.list-group-item').on('click', function() {
    $('.fas', this)
      .toggleClass('fa-angle-right')
      .toggleClass('fa-angle-down');
  });

});