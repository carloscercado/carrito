import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Product } from './../../models/product';
import { Router } from '@angular/router';

export interface DialogData {
  product: Product;
}

@Component({
  selector: 'app-dialog-added',
  templateUrl: './dialog-added.component.html',
  styleUrls: ['./dialog-added.component.css']
})
export class DialogAddedComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<DialogAddedComponent>,
    @Inject(MAT_DIALOG_DATA) private data: DialogData,
    private router: Router) {}

  ngOnInit() {
  }	

  cancel(){
  	this.dialogRef.close();
  }

  toCar(){
  	this.dialogRef.close();
  	this.router.navigateByUrl("/car-detail");
  }

}


