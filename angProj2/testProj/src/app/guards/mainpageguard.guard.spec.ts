import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { mainpageguardGuard } from './mainpageguard.guard';

describe('mainpageguardGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => mainpageguardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
