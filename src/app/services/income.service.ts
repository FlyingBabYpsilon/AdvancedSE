import { Injectable } from "@angular/core";
import { AngularFirestoreCollection, AngularFirestore } from "@angular/fire/firestore";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

export interface Income {
  id?: string;
  incomeDate: string;
  incomeAmt: number;
  incomeCat: string;
  incomeDesc: string;
}
 
@Injectable({
  providedIn: 'root'
})
export class IncomeService {
  private incomeCollection: AngularFirestoreCollection<Income>;
 
  private income: Observable<Income[]>;
 
  constructor(db: AngularFirestore) {
    this.incomeCollection = db.collection<Income>('income');
 
    this.income = this.incomeCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
  }
 
  getIncomings() {
    return this.income;
  }
 
  getIncome(id) {
    return this.incomeCollection.doc<Income>(id).valueChanges();
  }
 
  updateIncome(todo: Income, id: string) {
    return this.incomeCollection.doc(id).update(todo);
  }
 
  addIncome(todo: Income) {
    return this.incomeCollection.add(todo);
  }
 
  removeIncome(id) {
    return this.incomeCollection.doc(id).delete();
  }
}