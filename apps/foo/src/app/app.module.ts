import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FoobarModule } from '@amp/foobar';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FoobarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
