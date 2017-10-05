import { TestBed, inject } from '@angular/core/testing';

import { RoutePartsService } from './route-parts.service';

describe('RoutePartsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RoutePartsService]
    });
  });

  it('should be created', inject([RoutePartsService], (service: RoutePartsService) => {
    expect(service).toBeTruthy();
  }));
});
