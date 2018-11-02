import { Component, OnInit } from '@angular/core';
import { CarService } from './../../services/car.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private carService: CarService) { }

  ngOnInit() {
  }

}
