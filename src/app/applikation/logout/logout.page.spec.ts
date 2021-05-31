import { TestBed, waitForAsync } from '@angular/core/testing';
import { UrlSerializer } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { AuthenticationService } from 'src/app/adapter.services/authentication-service';
import { LogoutPage } from './logout.page';

describe('LogoutPage', () => {

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
          declarations: [LogoutPage],
          providers: [
            {provide: UrlSerializer},
            {provide: LogoutPage}, 
            {provide: AuthenticationService, useValue: FirestoreStub},
            
          ]
        }).compileComponents();
      }));
    
      it('should create the page', () => {
        const fixture = TestBed.createComponent(LogoutPage);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
      });
    
});
