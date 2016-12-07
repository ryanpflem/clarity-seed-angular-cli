import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: '',
    loadChildren: 'app/static-pages/static-pages.module#StaticPagesModule'
  },
  {
    path: 'components',
    loadChildren: 'app/components/components.module#ComponentsModule'
  },
  {
    path: 'items',
    loadChildren: 'app/items/items.module#ItemsModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
