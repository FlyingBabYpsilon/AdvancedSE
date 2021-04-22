import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadingController, NavController } from '@ionic/angular';
import { Income, IncomeService } from '../services/income.service';

@Component({
  selector: 'app-addincome',
  templateUrl: './addincome.page.html',
  styleUrls: ['./addincome.page.scss'],
})
export class AddincomePage implements OnInit {

  income: Income = {
    incomeAmt: 20,
    incomeCat: 'Food',
    incomeDesc: 'test',
    incomeDate: 'test',
  }

  incomeId = null;

  constructor(private route: ActivatedRoute, private nav: NavController, private incomeService: IncomeService, private loadingController: LoadingController) { }

  formatdmy(date) {

    date = new Date(date);

    var day = ('0' + date.getDate()).slice(-2);
    var month = ('0' + (date.getMonth() + 1)).slice(-2);
    var year = date.getFullYear();

    return day + '-' + month + '-' + year;
}


  ngOnInit() {
    this.incomeId = this.route.snapshot.params['id'];
    if (this.incomeId){
      this.loadIncome();
    }
  }

  async loadIncome() {
    const loading = await this.loadingController.create({
      message: 'Loading Income...'
    });
    await loading.present();

    this.incomeService.getIncome(this.incomeId).subscribe(res => {
      loading.dismiss();
      this.income = res;
    })
  }

  async saveIncome(){
    const loading = await this.loadingController.create({
      message: 'Saving Income...'
    });
    await loading.present();

    if(this.incomeId){
      this.incomeService.updateIncome(this.income, this.incomeId).then(() => {
        loading.dismiss();
        this.nav.navigateBack(['tabs/income']);
      });
    }else {
      this.incomeService.addIncome(this.income).then(() => {
        loading.dismiss();
        this.nav.navigateBack(['tabs/income']);
      });
    }
  }

}
