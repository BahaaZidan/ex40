import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { VoteComponent } from './vote/vote.component';

import {
  voteRoutes,
  VoteModule
} from './vote/vote.module';
import { SoonComponent } from './soon/soon.component';



const Routes = [
  {
    path: '',
    redirectTo: 'vote',
    pathMatch:'full'
  },
  {
    path: 'vote',
    component: VoteComponent,
    children:voteRoutes
  },
  {
    path: 'soon',
    component: SoonComponent
  }
];



@NgModule({
  declarations: [
    AppComponent,
    VoteComponent,
    SoonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(Routes),
    VoteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
