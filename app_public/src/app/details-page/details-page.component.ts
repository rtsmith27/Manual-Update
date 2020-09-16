import { Component, OnInit } from '@angular/core';
// import { Component, OnInit } from '@angular/core';
import { ManualUpdateDataService } from '../manual-update-data.service';
import { Result } from '../result-list/result-list.component';
import { ActivatedRoute } from '@angular/router';

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

  ngOnInit(): void {
    // this.route.paramMap
    //   .pipe(
    //     switchMap((params: ParamMap) => {
    //       let id = params.get('resultId')
    //       return this.manualUpdateDataService.getResultById(id);
    //     })
    //   )
  }

  public pageContent = {
    header: {
      title: '',
      strapline: ''
    },
  }
}
