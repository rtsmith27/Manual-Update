import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing/app-routing.module';

import { ResultListComponent } from './result-list/result-list.component';
import { FrameworkComponent } from './framework/framework.component';
import { AboutComponent } from './about/about.component';
import { HomepageComponent } from './homepage/homepage.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { ResultspageComponent } from './resultspage/resultspage.component';
import { HtmlLineBreaksPipe } from './html-line-breaks.pipe';
import { DetailsPageComponent } from './details-page/details-page.component';
import { ResultDetailsComponent } from './result-details/result-details.component';
import { AddManualPageComponent } from './add-manual-page/add-manual-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
// import { UpvoteButtonComponent } from './upvote-button/upvote-button.component';


@NgModule({
  declarations: [
    ResultListComponent,
    FrameworkComponent,
    AboutComponent,
    HomepageComponent,
    PageHeaderComponent,
    ResultspageComponent,
    HtmlLineBreaksPipe,
    DetailsPageComponent,
    ResultDetailsComponent,
    AddManualPageComponent,
    ContactPageComponent,
    // UpvoteButtonComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule
],
  providers: [],
  bootstrap: [FrameworkComponent]
})
export class AppModule { }
