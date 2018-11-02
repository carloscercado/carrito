import { Injectable } from '@angular/core';
import { Product } from './../models/product';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  products: Product[] = [];
  total: number = 0;
  constructor() { }

  add(obj: Product){
  	let list: Product [] = this.products;
  	list.push(obj);
  	this.products = list;
    this.defineTotal();
  }

  delete(obj: Product){
  	this.products = this.products.filter(x => x.id != obj.id);
    this.defineTotal();
  }

  defineTotal(){
    this.total = 0;
    this.products.forEach(x => this.total = this.total + Number(x.price));
  }

}
