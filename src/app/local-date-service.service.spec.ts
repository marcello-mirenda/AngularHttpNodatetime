import { TestBed } from '@angular/core/testing';

import { LocalDateServiceService } from './local-date-service.service';

describe('LocalDateServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LocalDateServiceService = TestBed.get(LocalDateServiceService);
    expect(service).toBeTruthy();
  });
});
