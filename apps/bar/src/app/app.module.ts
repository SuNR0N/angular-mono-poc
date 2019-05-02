import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FoobarComponent } from '@amp/foobar';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    FoobarComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
