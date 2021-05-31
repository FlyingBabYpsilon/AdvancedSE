import { TestBed, waitForAsync } from '@angular/core/testing';
import { UrlSerializer } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { AuthenticationService } from 'src/app/adapter.services/authentication-service';
import { RegistrationPage } from './registration.page';

describe('RegistrationPage', () => {

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
          declarations: [RegistrationPage],
          providers: [
            {provide: UrlSerializer},
            {provide: RegistrationPage}, 
            {provide: AuthenticationService, useValue: FirestoreStub},
            
          ]
        }).compileComponents();
      }));
    
      it('should create the page', () => {
        const fixture = TestBed.createComponent(RegistrationPage);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
      });
    
});
