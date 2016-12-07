import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StaticPagesRoutingModule } from './static-pages.routing';
import { StaticPagesComponent } from './static-pages.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    CommonModule,
    StaticPagesRoutingModule
  ],
  declarations: [StaticPagesComponent, HomeComponent]
})
export class StaticPagesModule { }
