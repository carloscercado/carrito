import { Injectable } from '@angular/core';
import { Data } from './data-json';
import { Category } from './../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  data: Data = new Data();
  constructor() { }

   get(): Category[] {
  		return this.data.data.categories;
   }

   getById(id: number): Category {
  	return this.data.data.categories.find(x => x.categori_id == id);
   }
}
