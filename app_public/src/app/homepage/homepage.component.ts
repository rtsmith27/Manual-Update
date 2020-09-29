import { Component, OnInit, Input } from '@angular/core';
import { ManualUpdateDataService} from '../manual-update-data.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  searchstring: string;
  constructor(private manualDataService: ManualUpdateDataService, private router: Router) { }

  ngOnInit() {
  }
  
  public pageContent = {
    header: {
      // title: 'Manual Update:',
      strapline: 'Need an update, use an update. Have an update, leave an update. '
    }
  };

public mongoSearch(): void {
  console.log("value", this.searchstring);
  this.manualDataService.getSearchResults(this.searchstring);
  this.router.navigateByUrl('Results');

}


}
