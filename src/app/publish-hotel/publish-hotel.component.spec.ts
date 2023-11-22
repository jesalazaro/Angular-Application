import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishHotelComponent } from './publish-hotel.component';

describe('PublishHotelComponent', () => {
  let component: PublishHotelComponent;
  let fixture: ComponentFixture<PublishHotelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PublishHotelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PublishHotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
