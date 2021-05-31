import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { Observable } from "rxjs";
import { Income } from "../domain.shared/income";

@Injectable()

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
  return this.firestore.collection('incomeList').doc<Income>(String(incomeId)).valueChanges();
}

deleteIncome(incomeId: string): Promise<void> {
  return this.firestore.doc(`incomeList/${incomeId}`).delete();
}

}