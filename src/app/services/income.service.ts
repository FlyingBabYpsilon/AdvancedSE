import { isNgTemplate } from "@angular/compiler";
import { Injectable } from "@angular/core";
import { AngularFirestoreCollection, AngularFirestore } from "@angular/fire/firestore";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Income } from "../shared/income";

 
@Injectable({
  providedIn: 'root'
})
export class IncomeService {

  constructor(public firestore: AngularFirestore) {}

  createIncome(
    incomeAmt: string,
    incomeCat: string,
    incomeDate: string,
    incomeDesc: string
  ): Promise<void> { 
  const incomeId = this.firestore.createId();

  return this.firestore.doc(`incomeList/${incomeId}`).set({
    incomeId,
    incomeAmt,
    incomeCat,
    incomeDate,
    incomeDesc,
  });
}

getIncomeList(): Observable<Income[]> {
  return this.firestore.collection<Income>(`incomeList`).valueChanges();
}

getIncomeDetail(incomeId: string): Observable<Income> {
  return this.firestore.collection('incomeList').doc<Income>(incomeId).valueChanges();
}

deleteIncome(incomeId: string): Promise<void> {
  return this.firestore.doc(`incomeList/${incomeId}`).delete();
}

}