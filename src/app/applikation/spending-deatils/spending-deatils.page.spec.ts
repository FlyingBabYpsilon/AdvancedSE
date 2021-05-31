import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { SpendingService } from 'src/app/adapter.services/spending.service.ts.service';

import { SpendingDeatilsPage } from './spending-deatils.page';

describe('SpendingDeatilsPage', () => {
  let component: SpendingDeatilsPage;
  let fixture: ComponentFixture<SpendingDeatilsPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SpendingDeatilsPage ],
      providers: [SpendingService]
    }).compileComponents();

    fixture = TestBed.createComponent(SpendingDeatilsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
