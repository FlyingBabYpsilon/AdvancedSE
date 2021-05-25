import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SpendingDeatilsPage } from './spending-deatils.page';

const routes: Routes = [
  {
    path: '',
    component: SpendingDeatilsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SpendingDeatilsPageRoutingModule {}
