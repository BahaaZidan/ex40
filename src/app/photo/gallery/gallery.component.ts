import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MasonryOptions, AngularMasonry } from 'angular2-masonry';

import { PhotoService } from '../photo.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  photos: Array<any>;
  initFunc: Function;
  username: string;
  options: MasonryOptions = {
      columnWidth: 270
    };
  @ViewChild(AngularMasonry) masonry: AngularMasonry;
  constructor(private photoService: PhotoService, private route: ActivatedRoute) {
    route.params.subscribe(params => {this.username = params['username'];});
  }

  getAll(cb: Function): void{
    return this.photoService.getAll()
      .subscribe(res => {
        this.photos = res.reverse();
        cb();
      });
  }

  getByUser(): void{
    this.photoService.getByUser(this.username)
      .subscribe(res => {this.photos = res.reverse();});
  }

  onNotify(deletedId: string): void{
    this.photos = this.photos.filter(x => { return x._id != deletedId; });
  }

  onLoaded(loaded: string): void{
    this.masonry.layout();
  }
  ngOnInit() {
    if (this.username) {
      this.getByUser();
    } else {
      this.getAll(() => {});
    }
    
    
  }

}
