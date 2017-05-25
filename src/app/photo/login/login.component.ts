import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'angular2-cookie/core';

import { PhotoService } from '../photo.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[CookieService]
})
export class LoginComponent implements OnInit {
  error: any;
  constructor(private photoService: PhotoService, private router: Router, private cookieService: CookieService) { }

  login(username: string, password: string): void {
    this.photoService.login(username, password)
      .subscribe(res => {
        if (res.status == "Login successful!") {
          this.error = false;
          this.cookieService.put('token', res.token);
          this.cookieService.put('user', username);
          this.cookieService.put('userId', res.user._id);
          this.router.navigate(['/photo/gallery']);
          window.location.reload();
        } else {
          this.error = res.status;
        }
      });
  }

  ngOnInit() {
  }

}
