import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
import { IncomeService } from '../../adapter.services/income.service';
import { Income } from '../../domain.shared/income';

@Component({
  selector: 'app-income-details',
  templateUrl: './income-details.page.html',
  styleUrls: ['./income-details.page.scss'],
})
export class IncomeDetailsPage implements OnInit {
  public income: Income;
 
  constructor(
    private incomeService: IncomeService,
    private route: ActivatedRoute,
    private alertController: AlertController,
    private nav: NavController
  ) { }

  ngOnInit() {
    const incomeId: string = this.route.snapshot.paramMap.get('incomeId');
    this.incomeService.getIncomeDetail(incomeId).subscribe(income => {
      this.income = income;
    });
  }

  async deleteIncome(incomeId: string): Promise<void> {
    const alert = await this.alertController.create({
      message: `Are you sure you want to delete this Income?`,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: blah => {
            console.log('Confirm Cancel: blah');
          },
        },
        {
          text: 'Okay',
          handler: () => {
            this.incomeService.deleteIncome(incomeId).then(() => {
              this.nav.navigateBack(['tabs/income']);
            });
          },
        },
      ],
    });
  
    await alert.present();
  }
}
