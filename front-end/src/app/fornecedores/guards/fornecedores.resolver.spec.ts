import { TestBed } from '@angular/core/testing';

import { FornecedoresResolver } from './fornecedores.resolver';

describe('FornecedoresResolver', () => {
  let resolver: FornecedoresResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(FornecedoresResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
