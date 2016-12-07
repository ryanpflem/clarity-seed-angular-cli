import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ClarityModule } from 'clarity-angular';

import { ItemsComponent } from './items.component';

import { ItemsRoutingModule } from './items.routing';
import { ItemsListComponent } from './items-list/items-list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    ClarityModule,
    ItemsRoutingModule
  ],
  declarations: [ItemsComponent, ItemsListComponent]
})
export class ItemsModule { }
