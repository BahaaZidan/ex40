import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'angular2-cookie/core';

import { VoteService } from '../vote.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[CookieService]
})
export class LoginComponent implements OnInit {
  error: any;
  constructor(private voteService: VoteService, private router: Router, private cookieService: CookieService) { }

  login(username: string, password: string): void {
    this.voteService.login(username, password)
      .subscribe(res => {
        if (res.status == "Login successful!") {
          this.error = false;
          this.cookieService.put('token', res.token);
          this.cookieService.put('user', username);
          this.router.navigate(['/vote/yourpolls']);
          window.location.reload();
        } else {
          this.error = res.status;
        }
      });
  }

  ngOnInit() {
  }

}
