import { TestBed } from '@angular/core/testing';

import { UsuarioResolverResolver } from './usuario-resolver.resolver';

describe('UsuarioResolverResolver', () => {
  let resolver: UsuarioResolverResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(UsuarioResolverResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
