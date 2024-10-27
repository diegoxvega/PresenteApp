import { TestBed } from '@angular/core/testing';

import { ApiclimaService } from './apiclima.service';

describe('ApiclimaService', () => {
  let service: ApiclimaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiclimaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
