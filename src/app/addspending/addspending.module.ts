import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddspendingPageRoutingModule } from './addspending-routing.module';

import { AddspendingPage } from './addspending.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddspendingPageRoutingModule
  ],
  declarations: [AddspendingPage]
})
export class AddspendingPageModule {}
