import { Component, OnInit } from '@angular/core';
import { CookieService } from 'angular2-cookie/core';

import { VoteService } from '../vote.service';

@Component({
  selector: 'app-your-polls',
  templateUrl: './your-polls.component.html',
  styleUrls: ['./your-polls.component.css'],
  providers:[CookieService]
})
export class YourPollsComponent implements OnInit {
  polls: any;
  deleted: boolean;
  constructor(private voteService: VoteService, private cookieService: CookieService) {
    this.polls = [];
  }
  deletePoll(id: string): void {
    this.voteService.deletePoll(id, this.cookieService.get('token'))
      .subscribe(res => {
        this.deleted = true;
        this.getPollByUser();
      });
  }
  getPollByUser(): void {
    this.voteService.getPollByUser(this.cookieService.get('token'))
      .subscribe(polls => {
        this.polls = polls;
      });
  }
  ngOnInit() {
    this.getPollByUser();
  }

}
