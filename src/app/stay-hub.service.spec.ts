import { TestBed } from '@angular/core/testing';

import { StayHubService } from './stay-hub.service';

describe('StayHubService', () => {
  let service: StayHubService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StayHubService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
