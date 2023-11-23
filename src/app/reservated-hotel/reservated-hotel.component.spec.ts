import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservatedHotelComponent } from './reservated-hotel.component';

describe('ReservatedHotelComponent', () => {
  let component: ReservatedHotelComponent;
  let fixture: ComponentFixture<ReservatedHotelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReservatedHotelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReservatedHotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
