import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductDetails } from '../interfaces/product-details';
import { ProductsService } from '../services/products.service';
import { Products } from '../interfaces/products';

@Component({
  selector: 'app-product-details',
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent {
  product: ProductDetails | null = null;
  
  
  productDetails !: Products;
  
  constructor(private _ActivatedRoute: ActivatedRoute) { }

  _ProductsService = inject(ProductsService);
  ngOnInit(): void {
    
    let productId = this._ActivatedRoute.snapshot.params?.['id'];
    this._ProductsService.getProductById(productId).subscribe({
      next:(res)=>{
        this.productDetails = res;
      },
      error:(err)=>{
        console.log(err);
        
      },
    })
   
  
}


}
