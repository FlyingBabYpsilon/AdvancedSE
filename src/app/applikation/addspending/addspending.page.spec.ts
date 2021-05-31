import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { SpendingService } from 'src/app/adapter.services/spending.service.ts.service';

import { AddspendingPage } from './addspending.page';

describe('AddspendingPage', () => {
  let component: AddspendingPage;
  let fixture: ComponentFixture<AddspendingPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AddspendingPage ],
      imports: [IonicModule.forRoot()],
      providers: [SpendingService]
    }).compileComponents();

    fixture = TestBed.createComponent(AddspendingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
