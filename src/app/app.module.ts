import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RappersGridComponent } from './rappers-grid/rappers-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    RappersGridComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
