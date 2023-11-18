import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservatedCarsComponent } from './reservated-cars.component';

describe('ReservatedCarsComponent', () => {
  let component: ReservatedCarsComponent;
  let fixture: ComponentFixture<ReservatedCarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReservatedCarsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReservatedCarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
