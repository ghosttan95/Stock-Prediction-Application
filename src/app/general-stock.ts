export class GeneralStockType{
	companyName: string; //Name of the company whose stock is to be searched
	//Writing prices from sunday to saturday for company's stock
    prices: Array<Object>;
    searchTiming: string;
}