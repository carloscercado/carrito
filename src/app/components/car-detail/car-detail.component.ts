import { Component, OnInit } from '@angular/core';
import { CarService } from './../../services/car.service';
import { Product } from './../../models/product';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {
  productsAdded: Product[];
  constructor(private carService: CarService) { }

  ngOnInit() {
  	this.productsAdded = this.carService.products;
  	window.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
  }

}
