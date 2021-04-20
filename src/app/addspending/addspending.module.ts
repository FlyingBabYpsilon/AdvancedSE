import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddspendingPageRoutingModule } from './addspending-routing.module';

import { AddspendingPage } from './addspending.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddspendingPageRoutingModule,
    FormsModule,
    ReactiveFormsModule
    ],
  declarations: [AddspendingPage]
})
export class AddspendingPageModule {}
