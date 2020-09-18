import { Component, OnInit, Input } from '@angular/core';
import { Result, Update } from '../result' /*'../result-list/result-list.component'*/;
import { ManualUpdateDataService } from '../manual-update-data.service'
// import * as $ from "jquery";

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
    votes: 0,
    section: '',
    updateText: '',
    createdOn: '',
    updateCount: 0
  };

  public formVisible: boolean = false;
  public formError: string;

  constructor(private manualUpdateDataService: ManualUpdateDataService) { }

  ngOnInit() {
  }

  private formIsValid(): boolean {
    if (this.newUpdate.updater && this.newUpdate.chapter && this.newUpdate.section && this.newUpdate.updateText) {
      return true;
    } else {
      return false;
    }
  }

  public onUpdateSubmit(): void {
    this.formError = '';
    if (this.formIsValid()) {
      this.manualUpdateDataService.addUpdateByResultId(this.result._id, this.newUpdate)
        .then((review: Update) => {
          // let updates = this.result.updates.slice(0);
          // updates.unshift(update);
          // this.result.updates = updates;
          this.resetAndHideUpdateForm();
        });
    } else {
      this.formError = 'Missed reauired field, please try again';
    }
  }

  private resetAndHideUpdateForm(): void {
    this.formVisible = false;
    this.newUpdate.updater = '';
    this.newUpdate.chapter = '';
    this.newUpdate.section = '';
    this.newUpdate.updateText = '';
  }
}


// $(function() {

//   $('.list-group-item').on('click', function() {
//     $('.fas', this)
//       .toggleClass('fa-angle-right')
//       .toggleClass('fa-angle-down');
//   });

// });