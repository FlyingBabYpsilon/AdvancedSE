import { TestBed } from "@angular/core/testing";
import { FormBuilder } from "@angular/forms";
import { ActivatedRoute, UrlSerializer } from "@angular/router";
import { IncomeService } from "src/app/adapter.services/income.service";
import { Income } from "src/app/domain.shared/income";
import { IncomeDetailsPage } from "./income-details.page";

describe('IncomeDetailsPage', () =>{
    let pipe: IncomeDetailsPage;
    let testIncome: Income;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [IncomeDetailsPage],
            providers: [ 
              {provide: UrlSerializer},
              {provide: FormBuilder},
              {provide: IncomeDetailsPage}, 
              {provide: IncomeService},
              {provide: Income},
              {provide: ActivatedRoute, useValue: {
                snapshot: {
                    paramMap: {
                        get(): string {
                            return '123';
                        },
                    },
                },
            },
        },
        ]}),
   //     pipe = new IncomeDetailsPage();
        testIncome = {
            incomeAmt: 5,
            incomeCat: 'test',
            incomeDate: '10.05.2021',
            incomeDesc: '',
            incomeId: ''
        };

    });
    it('exists', () => {
        expect(pipe).toBeTruthy();
    });

});