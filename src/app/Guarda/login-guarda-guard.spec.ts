import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { loginGuardaGuard } from './login-guarda-guard';

describe('loginGuardaGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => loginGuardaGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
