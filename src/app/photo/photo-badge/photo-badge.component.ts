import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CookieService } from 'angular2-cookie/core';

import { PhotoService } from '../photo.service';
//import { Photo } from '../photo.interface';

@Component({
  selector: 'app-photo-badge',
  templateUrl: './photo-badge.component.html',
  styleUrls: ['./photo-badge.component.css'],
  providers:[CookieService]
})
export class PhotoBadgeComponent implements OnInit {
  //@Input() incoming: Photo;
  @Input() id: string;
  @Input() url: string;
  @Input() description: string;
  @Input() author: string;
  @Input() authorId: string;
  @Input() likers: Array<string>;

  @Output() notify: EventEmitter<string> = new EventEmitter<string>();
  @Output() loaded: EventEmitter<string> = new EventEmitter<string>();
  
  isLiked: boolean;
  isAuthor: boolean;
  editing: boolean;
  userId: string = this.cookieService.get('userId');
  constructor(private cookieService: CookieService, private photoService: PhotoService) {
  }

  doLike(): void{
    this.photoService.doLike(this.cookieService.get('token'), this.id)
      .subscribe(res => {
        this.likers = res.likers; console.log(this.likers);
        this.isLiked = this.likers.indexOf(this.userId) != -1;
      });
  }

  delete(): void{
    this.photoService.delete(this.id, this.cookieService.get('token'))
      .subscribe(res => {
        console.log(res);
        this.notify.emit(this.id);
      });
  }

  editSwitch(): void{
    this.editing = this.editing == true ? false : true;
  }

  edit(description: string): void{
    console.log(description);
    this.photoService.edit(this.id, description, this.cookieService.get('token'))
      .subscribe(res => {
        this.description = res.description;
        this.editing = false;
      });
  }

  photoLoaded(event: Event): void{
    this.loaded.emit(event.type);
  }

  ngOnInit() {
    if (this.authorId) {
      this.isAuthor = this.userId == this.authorId;
    } else {
      this.isAuthor = this.userId == this.author;
    }
    this.isLiked = this.likers.indexOf(this.userId) != -1;
    console.log(this.cookieService.get('userId'));
    
    
  }

}
