import { TestBed } from '@angular/core/testing';

import { PlayNowService } from './play-now.service';

describe('PlayNowService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlayNowService = TestBed.get(PlayNowService);
    expect(service).toBeTruthy();
  });
});
