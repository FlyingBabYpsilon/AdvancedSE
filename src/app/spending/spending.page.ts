import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-spending',
  templateUrl: 'spending.page.html',
  styleUrls: ['spending.page.scss']
})
export class SpendingPage {

  private listItems: any; 

  constructor(public navCtrl: NavController) {
    this.listItems = [{
      name: "Imke",
      value: 1
    },{
      name: "2",
      value: 2
    }
  ];

  }

  private onAddBtnClicked(): void{
    this.listItems.push({
      name: "testi",
      value: 3
    });
  }

}
