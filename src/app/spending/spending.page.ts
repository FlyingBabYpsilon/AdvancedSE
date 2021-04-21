import { Component } from '@angular/core';
import { Spending, SpendingService } from '../services/spending.service.ts.service';

@Component({
  selector: 'app-spending',
  templateUrl: 'spending.page.html',
  styleUrls: ['spending.page.scss']
})
export class SpendingPage {

  spendings: Spending[];

  constructor(private spendingService: SpendingService){}
 
  ngOnInit() {
    this.spendingService.getSpendings().subscribe(res => {
      this.spendings = res;
    });
  }

  remove(item) {
    this.spendingService.removeSpending(item.id);
  }

}
