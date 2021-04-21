import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController, LoadingController } from '@ionic/angular';
import { Spending, SpendingService } from '../services/spending.service.ts.service';


@Component({
  selector: 'app-addspending',
  templateUrl: './addspending.page.html',
  styleUrls: ['./addspending.page.scss'],
})


export class AddspendingPage implements OnInit {

  spending: Spending = {
    spendAmt: 20,
    spendCat: 'Food',
    spendDesc: 'test',
    spendDate: new Date().getTime()
  };

  spendingId = null;

  constructor(private route: ActivatedRoute, private nav: NavController, private SpendingService: SpendingService, private loadingController: LoadingController) {
  }

  ngOnInit() {
    this.spendingId = this.route.snapshot.params['id'];
    if (this.spendingId)  {
      this.loadSpending();
    }
  }

  async loadSpending() {
    const loading = await this.loadingController.create({
      message: "Loading Spendings..."
    });
    await loading.present();

    this.SpendingService.getSpending(this.spendingId).subscribe(res => {
    if(res) {
      this.spending = res;
      } else {
      this.spending = {
      spendDate: new Date().getTime(),
      spendAmt: 0,
      spendCat: '',
      spendDesc: '',  
    }
    }
  });
}
  

  async saveSpending() {
 
    const loading = await this.loadingController.create({
      message: 'Saving Spending..'
    });
    await loading.present();
 
    if (this.spendingId) {
      this.SpendingService.updateSpending(this.spending, this.spendingId).then(() => {
        loading.dismiss();
        this.nav.navigateBack('SpendingPage');
      });
    } else {
      this.SpendingService.addSpending(this.spending).then(() => {
        loading.dismiss();
        this.nav.navigateBack('SpendingPage');
      });
    }
  }


}
  function saveSpending() {
    throw new Error('Function not implemented.');
  }

