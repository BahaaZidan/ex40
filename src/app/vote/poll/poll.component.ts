import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Http, Response } from '@angular/http';

import { VoteService } from '../vote.service';

@Component({
  selector: 'app-poll',
  templateUrl: './poll.component.html',
  styleUrls: ['./poll.component.css']
})
export class PollComponent implements OnInit {
  poll: any;
  id: string;
  constructor(private voteService:VoteService,private route: ActivatedRoute) {
    route.params.subscribe(params => {this.id = params['id'];});
  }
  doVote(_id: string): void {
    this.voteService.doVote(this.id, _id)
      .subscribe(res => {
        this.poll.options = res.options;
        
      });
  }
  ngOnInit() {
    this.voteService.getPoll(this.id)
      .subscribe(res => {
        this.poll = res;
        
      });
  }

}
