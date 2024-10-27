import { TestBed } from '@angular/core/testing';

import { OpenWeatherMapService } from './apiclima.service';

describe('ApiclimaService', () => {
  let service: OpenWeatherMapService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OpenWeatherMapService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
