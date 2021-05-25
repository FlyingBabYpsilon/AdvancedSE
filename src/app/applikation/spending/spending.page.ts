import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { SpendingService } from '../../adapter.services/spending.service.ts.service';
import { Spending } from '../../domain.shared/spending';

@Component({
  selector: 'app-spending',
  templateUrl: 'spending.page.html',
  styleUrls: ['spending.page.scss']
})
export class SpendingPage {

  public spendingList: Observable<Spending[]>

  constructor(private spendingService : SpendingService) {}
  
  ngOnInit() {
    this.spendingList= this.spendingService.getSpendingList();
  }

}
