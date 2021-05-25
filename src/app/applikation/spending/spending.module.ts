import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SpendingPage } from './spending.page';

import { SpendingPageRoutingModule } from './spending-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: SpendingPage }]),
    SpendingPageRoutingModule,
  ],
  declarations: [SpendingPage]
})
export class SpendingPageModule {}
