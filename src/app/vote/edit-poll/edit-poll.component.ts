import { Component, OnInit } from '@angular/core';
import { CookieService } from 'angular2-cookie/core';
import { Router, ActivatedRoute } from '@angular/router';

import { VoteService } from '../vote.service';
import { Poll } from '../poll.interface';

@Component({
  selector: 'app-edit-poll',
  templateUrl: './edit-poll.component.html',
  styleUrls: ['./edit-poll.component.css'],
  providers:[CookieService]
})
export class EditPollComponent implements OnInit {

  options: Array<string>;
  error: string;
  pname: string;
  id:  string;

  constructor(private voteService: VoteService, private router: Router, private route: ActivatedRoute, private cookieService: CookieService) {
    this.options = [];
    route.params.subscribe(params => {this.id = params['id'];});
  }

  editOptions(option: string): void {
    this.options.push(option);
  }

  editPoll(name: string, options: string): void {
    
     const poll: Poll = {
      title:name
    }
    const opts: any = [];
    for(let i = 0; i<options.split(',').length; i++) {
      opts.push({name:options.split(',')[i]});
    }
    poll.options = opts;
    
    this.voteService.editPoll(this.id, poll, this.cookieService.get('token'))
      .subscribe(res => {
        if (res._id) {
          this.router.navigate([`/vote/polls/${res._id}`]);
        } else {
          this.error = 'an error occured';
        }
      });

  }

  ngOnInit() {
    this.voteService.getPoll(this.id)
      .subscribe(res => {
        this.pname = res.title;
        res.options.forEach(element => {
          this.options.push(element.name);
        });
        
      });
  }

}
