import { Component, OnInit } from '@angular/core';

import { VoteService } from './vote.service';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {

  constructor(private voteService:VoteService) { }

  ngOnInit() {
    
  }

}
