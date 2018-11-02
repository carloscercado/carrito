import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from './../../models/product';
import { ProductService } from './../../services/product.service';
import { CategoryService } from './../../services/category.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: Product;
  constructor(private activatedRoute: ActivatedRoute,
  			  private productService: ProductService,
  			  private categoryService: CategoryService) { }

  ngOnInit() {
  	this.product = this.productService.get().find(x => x.id == this.activatedRoute.snapshot.params.id);
  }

}
