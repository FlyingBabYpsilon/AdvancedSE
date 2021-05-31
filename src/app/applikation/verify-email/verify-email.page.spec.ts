import { TestBed, waitForAsync } from '@angular/core/testing';
import { UrlSerializer } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { AuthenticationService } from 'src/app/adapter.services/authentication-service';
import { VerifyEmailPage } from './verify-email.page';

describe('VerifyEmailPage', () => {

  const FirestoreStub = {
    collection: (_user: string) => ({
      doc: () => ({
        valueChanges: () => new BehaviorSubject({ foo: 'bar' }),
        set: (_d: any) => new Promise<void>((resolve, _reject) => resolve()),
      }),
    }),
  };

    beforeEach(waitForAsync(() => {

        TestBed.configureTestingModule({
          declarations: [VerifyEmailPage],
          providers: [
            {provide: UrlSerializer},
            {provide: VerifyEmailPage}, 

            {provide: AuthenticationService, useValue: FirestoreStub},
            
          ]
        }).compileComponents();
      }));
    
      it('should create the page', () => {
        const fixture = TestBed.createComponent(VerifyEmailPage);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
      });
    
});
