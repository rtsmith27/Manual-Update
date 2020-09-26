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

  private formIsValid(): boolean {
    if (this.newUpdate.updater && this.newUpdate.chapter && this.newUpdate.section && this.newUpdate.updateText) {
      return true;
    } else {
      return false;
    }
  }

  // public thisisatest(): void {
  //   console.log("thisisatest");
  // }

  public onUpdateSubmit(): void {
    console.log("result id", this.result._id);
      this.formError = '';      
      if (this.formIsValid()) {
        // console.log("New Update", this.newUpdate);
        this.manualUpdateDataService.addUpdateByResultId(this.result._id, this.newUpdate)
          .then((update: Update) => {
            let updates = this.result.updates.slice(0);
            updates.unshift(update);
            this.result.updates = updates;
            this.resetAndHideUpdateForm();
          });
      } else {
        this.formError = 'Missed a reauired field, please try again';
      }
  }

  private resetAndHideUpdateForm(): void {
    this.formVisible = false;
    this.newUpdate.updater = '';
    this.newUpdate.chapter = '';
    this.newUpdate.section = '';
    this.newUpdate.updateText = '';
  }

  constructor(private manualUpdateDataService: ManualUpdateDataService) { }

  ngOnInit() {
  }

}


// $(function() {

//   $('.list-group-item').on('click', function() {
//     $('.fas', this)
//       .toggleClass('fa-angle-right')
//       .toggleClass('fa-angle-down');
//   });

// });