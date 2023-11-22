import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsHotelDeleteComponent } from './details-hotel-delete.component';

describe('DetailsHotelDeleteComponent', () => {
  let component: DetailsHotelDeleteComponent;
  let fixture: ComponentFixture<DetailsHotelDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailsHotelDeleteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailsHotelDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
