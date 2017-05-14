import { Component, OnInit, OnChanges } from '@angular/core';
import { Http, Response } from '@angular/http';

import { VoteService } from '../vote.service';
//import { HttpModule, Http, Response, RequestOptions, Headers } from '@angular/http';

interface Poll {
    name: string;
    link: string;
  }

@Component({
  selector: 'app-poll-list',
  templateUrl: './poll-list.component.html',
  styleUrls: ['./poll-list.component.css']
})

export class PollListComponent implements OnInit, OnChanges {
  
  
  response: any;
  constructor(private voteService:VoteService) {
    this.response = [];

  }

  ngOnInit() {
    this.voteService.getAllPolls()
      .subscribe(polls => {
        this.response = polls;
        
      });
  }
  ngOnChanges() {
    
  }

}
