import { TestBed } from '@angular/core/testing';

import { AddToService } from './add-to.service';

describe('AddToService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddToService = TestBed.get(AddToService);
    expect(service).toBeTruthy();
  });
});
