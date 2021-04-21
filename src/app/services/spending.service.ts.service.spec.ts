import { TestBed } from '@angular/core/testing';

import { Spending.Service.TsService } from './spending.service.ts.service';

describe('Spending.Service.TsService', () => {
  let service: Spending.Service.TsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Spending.Service.TsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
