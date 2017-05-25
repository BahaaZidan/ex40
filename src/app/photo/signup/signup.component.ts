import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { PhotoService } from '../photo.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  error: any;
  constructor(private photoService: PhotoService, private route:ActivatedRoute, private router:Router) { }
  signup(username: string, password: string, passwordAgain: string): void {
    
    if (password != passwordAgain) {
      this.error = "password mismatch";
    } else {
      this.photoService.signup(username, password)
        .subscribe(res => {
          if (res.status == 'Registration Successful!') {
            this.error = false;
            this.router.navigate(['/photo/login']);
          } else {
            this.error = res.status;
          }
        });
    }
  }
  ngOnInit() {
  }

}
