import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ResultListComponent } from '../result-list/result-list.component';
import { AboutComponent } from '../about/about.component';
import { HomepageComponent } from '../homepage/homepage.component';
import { DetailsPageComponent } from '../details-page/details-page.component';


const routes: Routes = [
{
  path: '',
  component: HomepageComponent
},
{
  path: 'Results',
  component: ResultListComponent
},
{
  path: 'about',
  component: AboutComponent
},
{
  path: 'result/:resultId',
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
