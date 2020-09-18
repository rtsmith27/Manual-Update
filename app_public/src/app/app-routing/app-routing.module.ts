import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ResultListComponent } from '../result-list/result-list.component';
import { AboutComponent } from '../about/about.component';
import { HomepageComponent } from '../homepage/homepage.component';
import { DetailsPageComponent } from '../details-page/details-page.component';
import { ResultspageComponent } from '../resultspage/resultspage.component'

const routes: Routes = [
{
  path: '',
  component: HomepageComponent
},
{
  path: 'Results',
  component: ResultspageComponent
},
{
  path: 'about',
  component: AboutComponent
},
{
  // path: 'result/:resultId',
  path: 'Details',
  component: DetailsPageComponent
}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
