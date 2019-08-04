import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { GeneralStockComponent } from './general-stock/general-stock.component';
import { PredictionService } from './prediction.service';


@NgModule({
  declarations: [
    AppComponent,
    GeneralStockComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [PredictionService],
  bootstrap: [AppComponent]
})
export class AppModule { }