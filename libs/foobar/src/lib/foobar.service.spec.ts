import { TestBed } from '@angular/core/testing';

import { FoobarService } from './foobar.service';

describe('FoobarService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FoobarService = TestBed.get(FoobarService);
    expect(service).toBeTruthy();
  });
});
