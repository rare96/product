import { Component, inject } from '@angular/core';
import { Products } from '../interfaces/products';
import { ProductsService } from '../services/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-products',
  imports: [],
  templateUrl: './all-products.component.html',
  styleUrl: './all-products.component.scss'
})
export class AllProductsComponent {
  allProducts: Products[] = [];
  _ProductsService = inject(ProductsService);
 _Router = inject(Router)

  ngOnInit(): void {
    this._ProductsService.getAllProducts().subscribe({
      next:(res)=>{
        this.allProducts = res;        
      },
      error:(err)=>{
        console.log(err);
        
      }
    })
   
  }

  goToProductDetail(productId: number): void {
    this._Router.navigate([`/products/${productId}`]);
  }

}
