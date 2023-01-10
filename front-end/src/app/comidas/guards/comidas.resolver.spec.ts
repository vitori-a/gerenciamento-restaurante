import { TestBed } from '@angular/core/testing';

import { ComidasResolver } from './comidas.resolver';

describe('ComidasResolver', () => {
  let resolver: ComidasResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(ComidasResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
