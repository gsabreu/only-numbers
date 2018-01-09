import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { OnlyNumbersModule } from './modules/only-numbers/only-numbers.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    OnlyNumbersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
