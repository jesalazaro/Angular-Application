import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsCarEditComponent } from './details-car-edit.component';

describe('DetailsCarEditComponent', () => {
  let component: DetailsCarEditComponent;
  let fixture: ComponentFixture<DetailsCarEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailsCarEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailsCarEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
