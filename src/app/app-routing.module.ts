import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./applikation/tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'addincome',
    loadChildren: () => import('./applikation/addincome/addincome.module').then( m => m.AddincomePageModule)
  },
  {
    path: 'addspending',
    loadChildren: () => import('./applikation/addspending/addspending.module').then( m => m.AddspendingPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./applikation/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registration',
    loadChildren: () => import('./applikation/registration/registration.module').then( m => m.RegistrationPageModule)
  },
  {
    path: 'verify-email',
    loadChildren: () => import('./applikation/verify-email/verify-email.module').then( m => m.VerifyEmailPageModule)
  },
  {
    path: 'logout',
    loadChildren: () => import('./applikation/logout/logout.module').then( m => m.LogoutPageModule)
  },
  {
    path: 'spending-deatils/:spendingId',
    loadChildren: () => import('./applikation/spending-deatils/spending-deatils.module').then( m => m.SpendingDeatilsPageModule)
  },
  {
    path: 'income-details/:incomeIds',
    loadChildren: () => import('./applikation/income-details/income-details.module').then( m => m.IncomeDetailsPageModule)
  }



];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
