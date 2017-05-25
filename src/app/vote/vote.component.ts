import { Component, OnInit } from '@angular/core';
import { CookieService } from 'angular2-cookie/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';



@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css'],
  providers:[CookieService]
})
export class VoteComponent implements OnInit {
  signed: boolean;
  constructor(private cookieService: CookieService, private router:Router) {
    if (this.cookieService.get('user')) {
      this.signed = true;
    } else {
      this.signed = false;
    }
  }
  logout(): void {
    this.cookieService.remove('user');
    this.cookieService.remove('token');
    this.router.navigate(['/vote/polls']);
    window.location.reload();
  }

  ngOnInit() {
    
  }

}
