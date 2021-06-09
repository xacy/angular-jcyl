import { TestBed } from '@angular/core/testing';

import { RouteActivateGuardGuard } from './route-activate-guard.guard';

describe('RouteActivateGuardGuard', () => {
  let guard: RouteActivateGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(RouteActivateGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
