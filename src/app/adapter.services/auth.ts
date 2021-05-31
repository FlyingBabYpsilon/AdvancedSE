import { inject, TestBed } from '@angular/core/testing';
import { AuthenticationService } from './authentication-service';

import { IncomeService } from './income.service';

describe('AuthenticationService', () => {
  let AuthenticationServiceSpy;

  beforeEach(() => {
    AuthenticationServiceSpy = jasmine.createSpyObj('AuthenticationService', {
       user: 0
     });
    TestBed.configureTestingModule({
      providers: [
        AuthenticationService,
        { provide: AuthenticationService, useValue: AuthenticationServiceSpy }
      ]
    });
  });

  it('does some test where it is injected',
    inject([AuthenticationService], (service: AuthenticationService) => {
      expect(service).toBeTruthy();
    })
  );
});