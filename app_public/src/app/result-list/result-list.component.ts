import { Component, OnInit } from '@angular/core';
import { ManualUpdateDataService } from '../manual-update-data.service';
import { Result } from '../result';

@Component({
  selector: 'app-result-list',
  templateUrl: './result-list.component.html',
  styleUrls: ['./result-list.component.css']
})
export class ResultListComponent implements OnInit {

  constructor(private manualUpdateDataService: ManualUpdateDataService) { }

  public results: Result[];

  public message: string;

  ngOnInit() {
    this.getResults();
  }

private getResults(): void {
  this.message = 'Searching for results'
  this.manualUpdateDataService
      .getResults()
      .then(foundResults => {
        this.message = foundResults.length > 0 ? '' : 'No results found';
        this.results = foundResults;
      });
  }

private showError(error: any): void {
  this.message = error.message;
  };
}
