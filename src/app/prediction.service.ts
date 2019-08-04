import { Injectable } from '@angular/core';
import { GeneralStockType } from './general-stock';
import { STOCKS } from './default-stock';

@Injectable()
export class PredictionService {
  private generalStocks: GeneralStockType[] = STOCKS;
  constructor() { }
  getStock(stockSearch: string):GeneralStockType{
      for( var i=0; i<this.generalStocks.length; i++ ){
          if( this.generalStocks[i].companyName == stockSearch ){
              return this.generalStocks[i];
          }
      }
  }

}