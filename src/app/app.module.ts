import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { LoginComponent } from './components/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { LandingComponent } from './components/landing/landing.component';
import { DialogAddedComponent } from './components/dialog-added/dialog-added.component';

// angular material 
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatListModule } from '@angular/material/list';

//servicios
import { ProductService } from './services/product.service';
import { CarService } from './services/car.service';
import { CategoryService } from './services/category.service';

const appRoutes: Routes = [
  { path: 'product/:id', component: ProductDetailComponent },
  { path: 'car-detail',      component: CarDetailComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'store',
    component: LandingComponent,
    data: { title: 'Tienda de Productos' }
  },
  { path: '',
    redirectTo: '/store',
    pathMatch: 'full'
  },
  { path: '**', component: LandingComponent }
];



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CarDetailComponent,
    ProductsComponent,
    ProductDetailComponent,
    AddProductComponent,
    LoginComponent,
    LandingComponent,
    DialogAddedComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgbModule,
    ToastrModule.forRoot(),
    RouterModule,
    RouterModule.forRoot(appRoutes),
    MatCardModule,
    MatIconModule,
    MatBadgeModule,
    MatButtonModule,
    MatDialogModule,
    MatListModule
  ],
  providers: [
    ProductService,
    CarService,
    CategoryService
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    DialogAddedComponent
  ]
})
export class AppModule { }
