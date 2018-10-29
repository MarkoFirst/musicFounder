import { TestBed } from '@angular/core/testing';

import { HttpGetterService } from './http-getter.service';

describe('HttpGetterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttpGetterService = TestBed.get(HttpGetterService);
    expect(service).toBeTruthy();
  });
});
