import { TestBed } from '@angular/core/testing';

import { GeneralAccessService } from './general-access.service';

describe('GeneralAccessService', () => {
  let service: GeneralAccessService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeneralAccessService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
