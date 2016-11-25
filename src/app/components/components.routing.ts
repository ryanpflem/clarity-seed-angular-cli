import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComponentsComponent } from './components.component';
import { HomeComponent } from './home/home.component';
import { ModalComponent } from './modal/modal.component';
import { DropdownComponent } from './dropdown/dropdown.component';

const routes: Routes = [
  {
    path: '',
    component: ComponentsComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
        data: {
          title: 'Home'
        },
      },
      {
        path: 'modal',
        component: ModalComponent,
        data: {
          title: 'Modal'
        },
      },
      {
        path: 'dropdown',
        component: DropdownComponent,
        data: {
          title: 'Dropdown'
        },
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }
