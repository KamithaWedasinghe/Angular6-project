import { TestBed } from '@angular/core/testing';

import { ViewDetailService } from './view-detail.service';

describe('ViewDetailService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ViewDetailService = TestBed.get(ViewDetailService);
    expect(service).toBeTruthy();
  });
});
