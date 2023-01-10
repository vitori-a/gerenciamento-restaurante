import { TestBed } from '@angular/core/testing';

import { EventosResolver } from './eventos.resolver';

describe('EventosResolver', () => {
  let resolver: EventosResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(EventosResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
