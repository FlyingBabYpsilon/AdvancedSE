import { inject, TestBed } from '@angular/core/testing';

import { IncomeService } from './income.service';

describe('IncomeService', () => {
  let IncomeServiceSpy;

  beforeEach(() => {
    IncomeServiceSpy = jasmine.createSpyObj('IncomeService', {
       incomeId: 0,
       incomeAmt: 0,
       incomeCat: 0,
       incomeDate: 0
     });
    TestBed.configureTestingModule({
      providers: [
        IncomeService,
        { provide: IncomeService, useValue: IncomeServiceSpy }
      ]
    });
  });

  it('does some test where it is injected',
    inject([IncomeService], (service: IncomeService) => {
      expect(service).toBeTruthy();
    })
  );

  it('does some test where it is manually built', () => {
    const service = new IncomeService(IncomeServiceSpy);
    expect(service).toBeTruthy();
  });
});