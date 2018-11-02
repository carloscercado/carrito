import { Component, OnInit } from '@angular/core';
import { CarService } from './../../services/car.service';
import { CategoryService } from './../../services/category.service';
import { Category } from './../../models/category';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  categories: Category[] = [];
  constructor(private carService: CarService,
  			  private categoryService: CategoryService) { }

  ngOnInit() {
  	this.categories = this.categoryService.get();
  }

}
