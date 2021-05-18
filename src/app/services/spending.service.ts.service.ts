import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Spending } from '../shared/spending';

@Injectable({
  providedIn: 'root'
})
export class SpendingService {

  constructor(public firestore: AngularFirestore) {}

  createSpending(
    spendAmt: number,
    spendCat: string,
    spendDate: string,
    spendDesc: string
  ): Promise<void> { 
  const spendId = this.firestore.createId();

  return this.firestore.doc(`spendList/${spendId}`).set({
    spendId,
    spendAmt,
    spendCat,
    spendDate,
    spendDesc,
  });
}

getSpendingList(): Observable<Spending[]> {
  return this.firestore.collection<Spending>(`spendList`).valueChanges();
}

getSpendingDetail(spendId: string): Observable<Spending> {
  return this.firestore.collection('spendList').doc<Spending>(String(spendId)).valueChanges();
}

deleteSpending(spendId: string): Promise<void> {
  return this.firestore.doc(`spendList/${spendId}`).delete();
}

}