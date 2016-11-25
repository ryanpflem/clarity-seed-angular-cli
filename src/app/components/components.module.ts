import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ClarityModule } from 'clarity-angular';

import { ComponentsComponent } from './components.component';
import { HomeComponent } from './home/home.component';
import { ModalComponent } from './modal/modal.component';
import { DropdownComponent } from './dropdown/dropdown.component';

import { ComponentsRoutingModule } from './components.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    ClarityModule,
    ComponentsRoutingModule
  ],
  declarations: [
    ComponentsComponent,
    HomeComponent,
    ModalComponent,
    DropdownComponent
  ]
})
export class ComponentsModule { }
