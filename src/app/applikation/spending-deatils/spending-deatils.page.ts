import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
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
    private nav: NavController
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
              this.nav.navigateBack(['tabs/spending']);
            });
          },
        },
      ],
    });
  
    await alert.present();
  }
}
