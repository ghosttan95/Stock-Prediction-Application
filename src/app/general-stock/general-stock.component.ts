import { Component, OnInit } from '@angular/core';
import { GeneralStockType } from '../general-stock';
import { PredictionService } from '../prediction.service';
//import { STOCKS } from '../default-stock';
@Component({
  selector: 'app-general-stock',
  templateUrl: './general-stock.component.html',
  styleUrls: ['./general-stock.component.css']
})
export class GeneralStockComponent implements OnInit {
  //private generalStocks: GeneralStockType[] = STOCKS;
    private currentStock : GeneralStockType;
    private pastStockSearch : GeneralStockType[] = [];
  constructor(private predictionservice : PredictionService ){ }
  ngOnInit() {
  }
  getStock(stockSearch:string):void{
      //Searching company is in stock or not
      this.currentStock = this.predictionservice.getStock(stockSearch);
      //storing past searches
      this.currentStock.searchTiming = (new Date()).toTimeString();
      this.pastStockSearch.push(this.currentStock);
  }
}