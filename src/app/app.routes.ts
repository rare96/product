import { Routes } from '@angular/router';
import { AllProductsComponent } from './all-products/all-products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

export const routes: Routes = [
    {path:'',component:AllProductsComponent, title:'All Product'},
    { path: 'products/:id', component: ProductDetailsComponent, title:'Product Details' },
];
