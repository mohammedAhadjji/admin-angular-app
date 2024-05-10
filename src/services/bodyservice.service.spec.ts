import { TestBed } from '@angular/core/testing';

import { BodyserviceService } from './bodyservice.service';

describe('BodyserviceService', () => {
  let service: BodyserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BodyserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
