import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { VoteComponent } from './vote/vote.component';
import { PhotoComponent } from './photo/photo.component';
import { SoonComponent } from './soon/soon.component';

import {
  voteRoutes,
  VoteModule
} from './vote/vote.module';

import {
  photoRoutes,
  PhotoModule
} from './photo/photo.module';





const Routes = [
  {
    path: '',
    redirectTo: 'photo',
    pathMatch:'full'
  },
  {
    path: 'vote',
    component: VoteComponent,
    children:voteRoutes
  },
  {
    path: 'photo',
    component: PhotoComponent,
    children:photoRoutes
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
    PhotoComponent,
    SoonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(Routes),
    VoteModule,
    PhotoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
