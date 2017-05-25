import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'angular2-cookie/core';

import { PhotoService } from '../photo.service';

@Component({
  selector: 'app-photo-page',
  templateUrl: './photo-page.component.html',
  styleUrls: ['./photo-page.component.css'],
  providers:[CookieService]
})
export class PhotoPageComponent implements OnInit {
  id: string;
  photo: any;
  isLiked: boolean;
  isAuthor: boolean;
  userId: string = this.cookieService.get('userId');


  constructor(private photoService:PhotoService, private route: ActivatedRoute, private cookieService: CookieService, private router: Router) {
    route.params.subscribe(params => {this.id = params['photoId'];});
  }

  delete(): void{
    this.photoService.delete(this.id, this.cookieService.get('token'))
      .subscribe(res => {
        console.log(res);
        this.router.navigate(['/photo/gallery']);
      });
  }
  doLike(): void{
    this.photoService.doLike(this.cookieService.get('token'), this.id)
      .subscribe(res => {
        this.photo.likers = res.likers; console.log(this.photo.likers);
        this.isLiked = this.photo.likers.indexOf(this.userId) != -1;
      });
  }

  ngOnInit() {
    this.photoService.getOne(this.id)
      .subscribe(res => {
        this.photo = res;
        this.isAuthor = res.author._id == this.userId;
        this.isLiked = res.likers.indexOf(this.userId) != -1;
      });

  }

}
