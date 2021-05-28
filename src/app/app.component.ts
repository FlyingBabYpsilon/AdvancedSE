import { Component} from '@angular/core';
import firebase from 'firebase/app';
import { firebaseConfig } from './domain.shared/credentials';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})

export class AppComponent {
  constructor() {
      firebase.initializeApp(firebaseConfig);
    }
}

