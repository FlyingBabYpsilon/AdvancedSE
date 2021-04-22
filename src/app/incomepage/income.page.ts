import { Component, OnInit } from '@angular/core';
import { Income, IncomeService } from '../services/income.service';

@Component({
  selector: 'app-income',
  templateUrl: 'income.page.html',
  styleUrls: ['income.page.scss']
})
export class IncomePage implements OnInit{

  income: Income[];

  constructor(private incomeService: IncomeService) {}


  ngOnInit(): void {
    this.incomeService.getIncomings().subscribe(res => {
      this.income = res;
    })
  }

  remove(item){
    this.incomeService.removeIncome(item.id);
  }

}
