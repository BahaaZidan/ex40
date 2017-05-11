import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  RouterModule,
  ActivatedRoute,
  Router,
  Routes
} from '@angular/router';

import { VoteService } from './vote.service';

import { HeaderComponent } from './header/header.component';
import { PollListComponent } from './poll-list/poll-list.component';
import { PollComponent } from './poll/poll.component';
import { YourPollsComponent } from './your-polls/your-polls.component';
import { AddPollComponent } from './add-poll/add-poll.component';
import { EditPollComponent } from './edit-poll/edit-poll.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { PollNotationComponent } from './poll-notation/poll-notation.component';

export const voteRoutes = [
  {
    path: '',
    redirectTo: 'polls',
    pathMatch:'full'
  },
  {
    path:'polls',
    component:PollListComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'signup',
    component:SignUpComponent
  },
  {
    path:'poll',
    component:PollComponent
  },
  {
    path:'yourpolls',
    component:YourPollsComponent
  },
  {
    path:'addpoll',
    component:AddPollComponent
  },
  {
    path:'editpoll',
    component:EditPollComponent
  }
  
];

@NgModule({
  declarations: [
    PollListComponent,
    PollComponent,
    YourPollsComponent,
    AddPollComponent,
    EditPollComponent,
    LoginComponent,
    SignUpComponent,
    PollNotationComponent
  ],
  exports: [
    PollListComponent,
    PollComponent,
    YourPollsComponent,
    AddPollComponent,
    EditPollComponent,
    LoginComponent,
    SignUpComponent,
    PollNotationComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  providers:[VoteService]
})


export class VoteModule { };