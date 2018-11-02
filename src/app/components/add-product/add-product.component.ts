import { Component, OnInit, Input, Inject } from '@angular/core';
import { Product } from './../../models/product';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DialogAddedComponent } from './../dialog-added/dialog-added.component';
import { CarService } from './../../services/car.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  @Input() product: Product;
  constructor(private dialog: MatDialog,
              private carService: CarService) { }

  ngOnInit() {
  }

   openDialog() {
    const dialogRef = this.dialog.open(DialogAddedComponent, {
      width: '400px',
      data: {product: this.product}
    });
    this.carService.add(this.product);

    dialogRef.afterClosed().subscribe((result) => {
      //this.product = result;
    });
  }

}
