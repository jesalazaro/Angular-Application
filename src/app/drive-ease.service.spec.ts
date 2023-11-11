import { TestBed } from '@angular/core/testing';

import { DriveEaseService } from './drive-ease.service';

describe('DriveEaseServiceService', () => {
  let service: DriveEaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DriveEaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
