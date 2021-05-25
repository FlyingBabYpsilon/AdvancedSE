import { Component, OnInit } from '@angular/core';
import { IncomeService } from '../../adapter.services/income.service';
import { Observable } from 'rxjs';
import { Income } from '../../domain.shared/income';

@Component({
  selector: 'app-income',
  templateUrl: 'income.page.html',
  styleUrls: ['income.page.scss']
})
export class IncomePage implements OnInit{

  public incomeList: Observable<Income[]>

  constructor(private incomeService : IncomeService) {}
  
  ngOnInit() {
    this.incomeList= this.incomeService.getIncomeList();
  }


}
