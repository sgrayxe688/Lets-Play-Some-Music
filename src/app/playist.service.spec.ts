import { TestBed } from '@angular/core/testing';

import { PlayistService } from './playist.service';

describe('PlayistService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlayistService = TestBed.get(PlayistService);
    expect(service).toBeTruthy();
  });
});
