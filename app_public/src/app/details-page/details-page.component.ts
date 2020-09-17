import { Component, OnInit } from '@angular/core';
// import { Component, OnInit } from '@angular/core';
import { ManualUpdateDataService } from '../manual-update-data.service';
import { Result } from '../result';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.css']
})
export class DetailsPageComponent implements OnInit {

  constructor(
    private manualUpdateDataService: ManualUpdateDataService,
    private route: ActivatedRoute
  ) { }

  public newResult: Result;

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        switchMap((params: ParamMap) => {
          let id = params.get('resultId')
          return this.manualUpdateDataService.getResultById(id);
        })
      )
      .subscribe((newResult: Result) => {
        this.newResult = newResult;
        this.pageContent.header.title = newResult.title;
      });
  }

  public pageContent = {
    header: {
      title: '',
      strapline: ''
    },
  }
}
