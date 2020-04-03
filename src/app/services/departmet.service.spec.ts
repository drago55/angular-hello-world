import { TestBed } from '@angular/core/testing';

import { DepartmetService } from './departmet.service';

describe('DepartmetService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DepartmetService = TestBed.get(DepartmetService);
    expect(service).toBeTruthy();
  });
});
