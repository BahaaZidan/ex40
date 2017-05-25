import { Component, OnInit } from '@angular/core';
import { CookieService } from 'angular2-cookie/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

import { PhotoService } from './photo.service';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css'],
  providers:[CookieService]
})
export class PhotoComponent implements OnInit {
  signed: boolean;
  username: string;
  constructor(private cookieService: CookieService, private router:Router, private photoService: PhotoService) {
    if (this.cookieService.get('user')) {
      this.signed = true;
      this.username = this.cookieService.get('user');
    } else {
      this.signed = false;
    }
  }

  facebook(): void{
    this.photoService.facebookLogin()
      .subscribe(res => {
        if (res.status == "Login successful!") {
          console.log(res);
          this.cookieService.put('token', res.token);
          this.cookieService.put('user', res.user.username);
          this.cookieService.put('userId', res.user._id);
          this.router.navigate(['/photo/gallery']);
          window.location.reload();
        } else {
          console.log(res);
        }
      });
  }

  logout(): void {
    this.cookieService.remove('user');
    this.cookieService.remove('token');
    this.router.navigate(['/photo/']);
    window.location.reload();
  }

  ngOnInit() {
    
  }

}
