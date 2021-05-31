import { ComponentFixture, waitForAsync, TestBed } from "@angular/core/testing";
import { FormBuilder } from "@angular/forms";
import { ActivatedRoute, UrlSerializer } from "@angular/router";
import { BehaviorSubject } from "rxjs";
import { SpendingService } from "src/app/adapter.services/spending.service.ts.service";
import { Spending } from "src/app/domain.shared/spending";
import { SpendingDeatilsPage } from "./spending-deatils.page";

describe('SpendingDeatilsPage', () => {
  let component: SpendingDeatilsPage;
  let fixture: ComponentFixture<SpendingDeatilsPage>;
  let service: SpendingService;

  const FirestoreStub = {
    collection: (_spendList: string) => ({
      doc: (_spendId: string, _spendAmt: string, _spendDate: string, _spendDesc: string, _spendCat: string) => ({
        valueChanges: () => new BehaviorSubject({ foo: 'bar' }),
        set: (_d: any) => new Promise<void>((resolve, _reject) => resolve()),
      }),
  
    }),
  };
  
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [SpendingDeatilsPage],
      providers: [ 
        {provide: UrlSerializer},
        {provide: FormBuilder},
        {provide: SpendingDeatilsPage}, 
        {provide: SpendingService, useValue: FirestoreStub},
        {provide: Spending},
        {provide: ActivatedRoute, useValue: {
          snapshot: {
              paramMap: {
                  get(): string {
                      return '123';
                  },
              },
          },
      },}
      ],
      
    }).compileComponents();
    
    service = TestBed.get(SpendingService);
    fixture = TestBed.createComponent(SpendingDeatilsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});



