import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController, AlertController, NavController  } from '@ionic/angular';
import { IncomeService } from '../services/income.service';

@Component({
  selector: 'app-addincome',
  templateUrl: './addincome.page.html',
  styleUrls: ['./addincome.page.scss'],
})
export class AddincomePage {
  public createIncomeForm: FormGroup;
  constructor(
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    private incomeService: IncomeService,
    formBuilder: FormBuilder,
    private nav: NavController
  ) {
    this.createIncomeForm = formBuilder.group({
      incomeAmt: ['', Validators.required],
      incomeCat: ['', Validators.required],
      incomeDate: ['', Validators.required],
      incomeDesc: ['', Validators.required],
    });
  }


  async createIncome() {
    const loading = await this.loadingCtrl.create();
  
    const incomeAmt = this.createIncomeForm.value.incomeAmt;
    const incomeCat = this.createIncomeForm.value.incomeCat;
    const incomeDate = this.createIncomeForm.value.incomeDate;
    const incomeDesc = this.createIncomeForm.value.incomeDesc;
  
    this.incomeService
      .createIncome(incomeAmt, incomeCat, incomeDate, incomeDesc)
      .then(
        () => {
          loading.dismiss().then(() => {
            this.nav.navigateBack(['tabs/income']);
          });
        },
        error => {
          loading.dismiss().then(() => {
            console.error(error);
            this.nav.navigateBack(['tabs/income']);
          });
        }
      );
  
    return await loading.present();
  }
  
}