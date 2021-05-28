import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IncomeService } from '../../adapter.services/income.service';
import { Income } from '../../domain.shared/income';
import { AlertController } from '@ionic/angular';
import { Spending } from '../../domain.shared/spending';
import { SpendingService } from '../../adapter.services/spending.service.ts.service';


@Component({
  selector: 'app-spending-deatils',
  templateUrl: './spending-deatils.page.html',
  styleUrls: ['./spending-deatils.page.scss'],
})
export class SpendingDeatilsPage implements OnInit {

  public spending: Spending;
 
  constructor(
    private spendingService: SpendingService,
    private route: ActivatedRoute,
    private alertController: AlertController,
    private router: Router
  ) { }

  ngOnInit() {
    const spendId: string = this.route.snapshot.paramMap.get('spendId');
    this.spendingService.getSpendingDetail(spendId).subscribe(spending => {
      this.spending = spending;
    });
  }

  async deleteSpending(spendId: string): Promise<void> {
    const alert = await this.alertController.create({
      message: `Are you sure you want to delete this Spending?`,
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
            this.spendingService.deleteSpending(spendId).then(() => {
              this.router.navigateByUrl('');
            });
          },
        },
      ],
    });
  
    await alert.present();
  }
}
