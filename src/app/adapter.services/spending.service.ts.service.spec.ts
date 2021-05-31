import { inject, TestBed } from '@angular/core/testing';
import { SpendingService } from './spending.service.ts.service';

describe('SpendingService', () => {
  let SpendingServiceSpy;

  beforeEach(() => {
    SpendingServiceSpy = jasmine.createSpyObj('SpendingService', {
       spendId: 0,
       spendAmt: 0,
       spendCat: 0,
       spendDesc: 0,
       spendDate: 0
     });
    TestBed.configureTestingModule({
      providers: [
        SpendingService,
        { provide: SpendingService, useValue: SpendingServiceSpy }
      ]
    });
  });

  it('does some test where it is injected',
    inject([SpendingService], (service: SpendingService) => {
      expect(service).toBeTruthy();
    })
  );

  it('does some test where it is manually built', () => {
    const service = new SpendingService(SpendingServiceSpy);
    expect(service).toBeTruthy();
  });
});
