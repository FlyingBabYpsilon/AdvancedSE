import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavParams } from '@ionic/angular';
import { ExpenseProvider } from '../providers/expense/expense';


@Component({
  selector: 'app-addspending',
  templateUrl: './addspending.page.html',
  styleUrls: ['./addspending.page.scss'],
  providers: [NavParams, ExpenseProvider]
})


export class AddspendingPage implements OnInit {

  spendCate: any;
  addSpendingForm: FormGroup;
  public errorMessage: string;

  constructor(public navCtrl: NavController,fb:FormBuilder,public navParams: NavParams ,public expenseProvider: ExpenseProvider) { 
    
  this.addSpendingForm = fb.group({
    date: [
      "",
      Validators.compose([Validators.required])
    ],
    amount: [
      "",
      Validators.compose([Validators.required,Validators.pattern("^[0-9]+(\.[0-9]{1,2})?$")])
    ],
    category: [
      "",
      Validators.compose([Validators.required])
    ],
    desc: [
      "",
      Validators.compose([Validators.required])
    ],
    remark: [
      "",
      
    ]
      });

}

formatdmy(date) {

  date = new Date(date);

  var day = ('0' + date.getDate()).slice(-2);
  var month = ('0' + (date.getMonth() + 1)).slice(-2);
  var year = date.getFullYear();

  return day + '-' + month + '-' + year;
}


createSpending(
  spendDate: string,
  spentAmt: number,
  spendDesc:string,
  spendRemark:string, 
  
  ):void {
    if(!this.addSpendingForm.valid){
      console.log("Invalid value ");
    }
    console.log("desc is " + spendDesc);
    if(spendDesc == null){
      spendDesc ="";
    }
    if(spendRemark == null){
      spendRemark = "";
    }
  
    spendDate = this.formatdmy(spendDate);
    this.expenseProvider
    .createSpending(spendDate,spentAmt,spendDesc,spendRemark,this.spendCate)
    ;
}  
 
  ngOnInit() {
  }

}
