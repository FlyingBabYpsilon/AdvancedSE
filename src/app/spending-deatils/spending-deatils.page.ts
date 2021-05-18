import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IncomeService } from '../services/income.service';
import { Income } from '../shared/income';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-spending-deatils',
  templateUrl: './spending-deatils.page.html',
  styleUrls: ['./spending-deatils.page.scss'],
})
export class SpendingDeatilsPage implements OnInit {

  public income: Income;
 
  constructor(
    private incomeService: IncomeService,
    private route: ActivatedRoute,
    private alertController: AlertController,
    private router: Router
  ) { }

  ngOnInit() {
    const incomeId: string = this.route.snapshot.paramMap.get('incomeId');
    this.incomeService.getIncomeDetail(incomeId).subscribe(income => {
      this.income = income;
    });
  }

  async deleteIncome(incomeId: string, incomeName: string): Promise<void> {
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
              this.router.navigateByUrl('');
            });
          },
        },
      ],
    });
  
    await alert.present();
  }
}
