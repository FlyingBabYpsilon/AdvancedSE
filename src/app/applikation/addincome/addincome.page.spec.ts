import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { UrlSerializer } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { IncomeService } from 'src/app/adapter.services/income.service';
import { Income } from 'src/app/domain.shared/income';

import { AddincomePage } from './addincome.page';

describe('AddincomePage', () => {
  let component: AddincomePage;
  let fixture: ComponentFixture<AddincomePage>;

  const FirestoreStub = {
    collection: (_income: string) => ({
      doc: (_incomeId: string, _incomeAmt: string, _incomeDate: string, _incomeDesc: string, _incomeCat: string) => ({
        valueChanges: () => new BehaviorSubject({ foo: 'bar' }),
        set: (_d: any) => new Promise<void>((resolve, _reject) => resolve()),
      }),
  
    }),
  };
  
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [AddincomePage],
      providers: [ 
        {provide: UrlSerializer},
        {provide: FormBuilder},
        {provide: AddincomePage}, 
        {provide: IncomeService, useValue: FirestoreStub},
        {provide: Income}
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AddincomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
