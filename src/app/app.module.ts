import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { IncreaseValueComponent } from './increase-value/increase-value.component';

@NgModule({
  declarations: [
    AppComponent,
    IncreaseValueComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
