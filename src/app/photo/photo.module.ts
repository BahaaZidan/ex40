import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MasonryModule } from 'angular2-masonry';

import { PhotoService } from './photo.service';

import { GalleryComponent } from './gallery/gallery.component';
import { PhotoPageComponent } from './photo-page/photo-page.component';
import { PhotoBadgeComponent } from './photo-badge/photo-badge.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

export const photoRoutes = [
  
  {
    path: '',
    redirectTo: 'gallery',
    pathMatch:'full'
  },
  {
    path:'gallery',
    component:GalleryComponent
  },
  {
    path:'gallery/:username',
    component:GalleryComponent
  },
  {
    path:'add',
    component:AddComponent
  },
  {
    path:'edit/:photoId',
    component:EditComponent
  },
  {
    path:'page/:photoId',
    component:PhotoPageComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'signup',
    component:SignupComponent
  }
  
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MasonryModule
  ],
  providers:[PhotoService],
  declarations: [GalleryComponent, PhotoPageComponent, PhotoBadgeComponent, AddComponent, EditComponent, LoginComponent, SignupComponent],
  exports: [GalleryComponent, PhotoPageComponent, PhotoBadgeComponent, AddComponent, EditComponent, LoginComponent, SignupComponent]
})
export class PhotoModule { }
