import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Spending {
  spendAmt: number,
  spendCat: string,
  spendDesc: string,
  spendDate: string
}

@Injectable({
  providedIn: 'root'
})
export class SpendingService {

  private spendingsCollection: AngularFirestoreCollection<Spending>;
 
  private spendings: Observable<Spending[]>;
 
  constructor(db: AngularFirestore) {
    this.spendingsCollection = db.collection<Spending>('spendings');
 
    this.spendings = this.spendingsCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
  }
 
  getSpendings() {
    return this.spendings;
  }
 
  getSpending(id) {
    return this.spendingsCollection.doc<Spending>(id).valueChanges();
  }
 
  updateSpending(spending: Spending, id: string) {
    return this.spendingsCollection.doc(id).update(spending);
  }
 
  addSpending(spending: Spending) {
    return this.spendingsCollection.add(spending);
  }
 
  removeSpending(id) {
    return this.spendingsCollection.doc(id).delete();
  }
}