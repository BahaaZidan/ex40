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



const Routes = [
  {
    path: 'vote',
    component: VoteComponent,
    children:voteRoutes
  }
];



@NgModule({
  declarations: [
    AppComponent,
    VoteComponent
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
