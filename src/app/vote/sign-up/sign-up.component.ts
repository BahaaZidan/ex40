import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { VoteService } from '../vote.service';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  error: any;
  constructor(private voteService: VoteService, private route:ActivatedRoute, private router:Router) { }
  signup(username: string, password: string, passwordAgain: string): void {
    
    if (password != passwordAgain) {
      this.error = "password mismatch";
    } else {
      this.voteService.signup(username, password)
        .subscribe(res => {
          if (res.status == 'Registration Successful!') {
            this.error = false;
            this.router.navigate(['/vote/login']);
          } else {
            this.error = res.status;
          }
        });
    }
  }
  ngOnInit() {
  }

}
