import { Component, OnInit } from '@angular/core';
import { ProductService } from './../../services/product.service';
import { Product } from './../../models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  product: Product;

  constructor(private productService: ProductService) { }

  ngOnInit() {
  	this.products = this.productService.get();
  	this.products.forEach(x => {
  		x.loaded_image = false
  	})
  }

  imageLoaded(item: Product){
    item.loaded_image = true;
  }

}
