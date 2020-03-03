import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SidebarMobileComponent } from './layouts/menu/mobile/sidebar-mobile/sidebar-mobile.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarMobileComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
