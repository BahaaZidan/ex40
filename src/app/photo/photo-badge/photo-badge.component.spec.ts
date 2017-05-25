import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoBadgeComponent } from './photo-badge.component';

describe('PhotoBadgeComponent', () => {
  let component: PhotoBadgeComponent;
  let fixture: ComponentFixture<PhotoBadgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotoBadgeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
