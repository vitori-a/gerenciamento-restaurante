import { TestBed } from '@angular/core/testing';

import { AgendamentosResolver } from './agendamentos.resolver';

describe('AgendamentosResolver', () => {
  let resolver: AgendamentosResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(AgendamentosResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
