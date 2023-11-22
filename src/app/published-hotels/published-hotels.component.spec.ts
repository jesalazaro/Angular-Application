import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishedHotelsComponent } from './published-hotels.component';

describe('PublishedHotelsComponent', () => {
  let component: PublishedHotelsComponent;
  let fixture: ComponentFixture<PublishedHotelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PublishedHotelsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PublishedHotelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
