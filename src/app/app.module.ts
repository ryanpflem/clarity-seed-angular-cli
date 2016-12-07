import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ClarityModule } from 'clarity-angular';

import { AppRoutingModule } from './app.routing';
import { LinkService } from './shared/link.service';

import { AppComponent } from './app.component';
import { HeaderNavComponent, SideNavComponent } from './layouts';

import { ComponentsModule } from './components/components.module';
import { StaticPagesModule } from './static-pages/static-pages.module';


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
  ],
  providers: [LinkService],
  bootstrap: [AppComponent]
})
export class AppModule { }
