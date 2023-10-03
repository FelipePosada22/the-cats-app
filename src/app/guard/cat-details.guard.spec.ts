import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { catDetailsGuard } from './cat-details.guard';

describe('catDetailsGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) =>
    TestBed.runInInjectionContext(() => catDetailsGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
