import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SpendingDeatilsPageRoutingModule } from './spending-deatils-routing.module';

import { SpendingDeatilsPage } from './spending-deatils.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SpendingDeatilsPageRoutingModule
  ],
  declarations: [SpendingDeatilsPage]
})
export class SpendingDeatilsPageModule {}
