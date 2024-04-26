import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';

describe('Firebase Authentication Service', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
