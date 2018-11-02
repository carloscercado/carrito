import { Component, OnInit } from '@angular/core';
import { CarService } from './../../services/car.service';
import { Product } from './../../models/product';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {
  constructor(private carService: CarService) { }

  ngOnInit() {
  	window.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
  }

  delete(item: Product){
  	this.carService.delete(item);
  }

}
