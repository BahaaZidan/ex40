import { Component, OnInit } from '@angular/core';
import { CookieService } from 'angular2-cookie/core';
import { Router } from '@angular/router';

import { VoteService } from '../vote.service';
import { Poll } from '../poll.interface';

@Component({
  selector: 'app-add-poll',
  templateUrl: './add-poll.component.html',
  styleUrls: ['./add-poll.component.css'],
  providers:[CookieService]
})
export class AddPollComponent implements OnInit {
  error: string;
  options: Array<string>;

  constructor(private voteService: VoteService, private router: Router, private cookieService: CookieService) {
    this.options = [];
  }

  addOption(option: string): void {
    this.options.push(option);
  }

  addPoll(name: string, options: string): void {
    
     const poll: Poll = {
      title:name
    }
    const opts: any = [];
    for(let i = 0; i<options.split(',').length; i++) {
      opts.push({name:options.split(',')[i]});
    }
    poll.options = opts;
    
    this.voteService.addPoll(poll, this.cookieService.get('token'))
      .subscribe(res => {
        if (res._id) {
          this.router.navigate([`/vote/polls/${res._id}`]);
        } else {
          this.error = 'an error occured';
        }
      });

  }

  ngOnInit() {
  }

}
