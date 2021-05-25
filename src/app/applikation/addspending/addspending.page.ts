import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController, LoadingController, AlertController } from '@ionic/angular';
import { SpendingService } from '../../adapter.services/spending.service.ts.service';


@Component({
  selector: 'app-addspending',
  templateUrl: './addspending.page.html',
  styleUrls: ['./addspending.page.scss'],
})


export class AddspendingPage {
  public createSpendingForm: FormGroup;
  constructor(
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    private spendingService: SpendingService,
    formBuilder: FormBuilder,
    private nav: NavController
  ) {
    this.createSpendingForm = formBuilder.group({
      spendAmt: ['', Validators.required],
      spendCat: ['', Validators.required],
      spendDate: ['', Validators.required],
      spendDesc: ['', Validators.required],
    });
  }


  async createSpending() {
    const loading = await this.loadingCtrl.create();
  
    const spendAmt = this.createSpendingForm.value.spendAmt;
    const spendCat = this.createSpendingForm.value.spendCat;
    const spendDate = this.createSpendingForm.value.spendDate;
    const spendDesc = this.createSpendingForm.value.spendDesc;
  
    this.spendingService
      .createSpending(spendAmt, spendCat, spendDate, spendDesc)
      .then(
        () => {
          loading.dismiss().then(() => {
            this.nav.navigateBack(['tabs/spending']);
          });
        },
        error => {
          loading.dismiss().then(() => {
            console.error(error);
            this.nav.navigateBack(['tabs/spending']);
          });
        }
      );
  
    return await loading.present();
  }
  
}