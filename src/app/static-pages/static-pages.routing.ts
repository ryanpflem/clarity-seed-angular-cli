import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StaticPagesComponent } from './static-pages.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {
    path: '',
    component: StaticPagesComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
        data: {
          title: 'Home'
        },
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StaticPagesRoutingModule { }
