import { TestBed, waitForAsync } from '@angular/core/testing';
import { Router, UrlSerializer } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { AuthenticationService } from 'src/app/adapter.services/authentication-service';
import { LoginPage } from './login.page';

describe('LoginPage', () => {

  const FirestoreStub = {
    collection: (_incomeList: string) => ({
      doc: (_incomeId: string, _incomeAmt: string, _incomeDate: string, _incomeDesc: string, _incomeCat: string) => ({
        valueChanges: () => new BehaviorSubject({ foo: 'bar' }),
        set: (_d: any) => new Promise<void>((resolve, _reject) => resolve()),
      }),
  
    }),
  };

beforeEach(waitForAsync(() => {

    TestBed.configureTestingModule({
      declarations: [LoginPage],
      providers: [
        {provide: UrlSerializer},
        {provide: LoginPage}, 
        {provide: Router},
        {provide: Function},
        {provide: AuthenticationService, useValue: FirestoreStub},
        
      ]
    }).compileComponents();
  }));

  it('should create the page', () => {
    const fixture = TestBed.createComponent(LoginPage);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

});
