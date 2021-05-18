import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddincomePageRoutingModule } from './addincome-routing.module';

import { AddincomePage } from './addincome.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddincomePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AddincomePage]
})
export class AddincomePageModule {}
