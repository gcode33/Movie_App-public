import { TestBed } from '@angular/core/testing';

import { MovieAppDataService } from './movie-app-data.service';

describe('MovieAppDataService', () => {
  let service: MovieAppDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovieAppDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
