import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'addincome',
    loadChildren: () => import('./addincome/addincome.module').then( m => m.AddincomePageModule)
  },
  {
    path: 'addspending',
    loadChildren: () => import('./addspending/addspending.module').then( m => m.AddspendingPageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
