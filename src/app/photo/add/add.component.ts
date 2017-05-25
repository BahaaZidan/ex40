import { Component, OnInit, ElementRef, Input, ViewChild } from '@angular/core';
import { CookieService } from 'angular2-cookie/core';
import { Router } from '@angular/router';

import { PhotoService } from '../photo.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  error: string;
  @ViewChild('formData') formEl: ElementRef;

  constructor(private photoService: PhotoService, private router: Router, private cookieService: CookieService) { }
  add(event: Event): void{
    event.preventDefault();
    let formEl: HTMLFormElement = this.formEl.nativeElement;
    let formData: FormData = new FormData(formEl);
    this.photoService.add(formData, this.cookieService.get('token'))
      .subscribe(res => {
        if (res._id) {
          this.router.navigate([`/photo/page/${res._id}`]);
        } else {
          this.error = 'an error occured';
        }
      });
  }

  ngOnInit() {
  }

}
