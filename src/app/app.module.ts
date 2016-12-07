import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ClarityModule } from 'clarity-angular';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app.routing';
import { LinkService } from './shared/link.service';
import { ItemsService, items, UsersService, users } from './shared';

import { AppComponent } from './app.component';
import { HeaderNavComponent, SideNavComponent } from './layouts';

import { ComponentsModule } from './components/components.module';
import { StaticPagesModule } from './static-pages/static-pages.module';
import { ItemsModule } from './items/items.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderNavComponent,
    SideNavComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ClarityModule,
    AppRoutingModule,
    StaticPagesModule,
    ComponentsModule,
    ItemsModule,
    StoreModule.provideStore({ items, users })
  ],
  providers: [LinkService, ItemsService, UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
