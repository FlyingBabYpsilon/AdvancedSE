import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SpendingPage } from './spending.page';

describe('SpendingPage', () => {
  let component: SpendingPage;
  let fixture: ComponentFixture<SpendingPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [SpendingPage],
    }).compileComponents();

    fixture = TestBed.createComponent(SpendingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
