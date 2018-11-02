import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from './../../services/product.service';
import { Product } from './../../models/product';
import { Category } from './../../models/category';
import { CategoryService } from './../../services/category.service';

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.css']
})
export class CategoryDetailComponent implements OnInit {
  products: Product[] = [];
  category: Category;
  id: number;

  constructor(private activatedRoute: ActivatedRoute,
  			  private productService: ProductService,
  			  private categoryService: CategoryService) { }

  ngOnInit() {
  	this.id = this.activatedRoute.snapshot.params.id;
  	this.products = this.productService.get();
  	this.category = this.categoryService.getById(this.id);
  	console.log(this.category);
  	this.products = this.products.filter(x => this.containCategory(x.categories));
  	  								   

  this.products.forEach(x => {
  		x.loaded_image = false
  	})
  }

  containCategory(categories_ids){
  	let contain: boolean = false;
  	categories_ids.filter(x => x == this.id)
  				  .forEach(y => contain = true);
  	return contain;
  }

  imageLoaded(item: Product){
    item.loaded_image = true;
  }

}
