import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservatedHotelsComponent } from './reservated-hotels.component';

describe('ReservatedHotelsComponent', () => {
  let component: ReservatedHotelsComponent;
  let fixture: ComponentFixture<ReservatedHotelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReservatedHotelsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReservatedHotelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
