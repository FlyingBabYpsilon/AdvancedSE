import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthenticationService } from './adapter.services/authentication-service';
import { SpendingService } from './adapter.services/spending.service.ts.service';
import { IncomeService } from './adapter.services/income.service';
import { environment } from 'src/environments/environment';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [ 
    IonicModule.forRoot(), 
    AppRoutingModule, 
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    {provide: AuthenticationService},
    {provide: SpendingService},
    {provide: IncomeService},
    {provide: AngularFireAuth}
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
