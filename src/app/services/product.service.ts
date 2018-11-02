import { Injectable } from '@angular/core';
import { Data } from './data-json';
import { Product } from './../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  data: Data = new Data();
  constructor() { }

  get(): Product[] {
  	return this.data.data.products;
  }
}
