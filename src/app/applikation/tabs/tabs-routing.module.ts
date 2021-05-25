import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'landing',
        loadChildren: () => import('../landingpage/landingpage.module').then(m => m.LandingPageModule)
      },
      {
        path: 'income',
        loadChildren: () => import('../incomepage/income.module').then(m => m.IncomePageModule)
      },
      {
        path: 'spending',
        loadChildren: () => import('../spending/spending.module').then(m => m.SpendingPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/landing',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/landing',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
