import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductDetails } from '../interfaces/product-details';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-product-details',
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent {
  product: ProductDetails | null = null;
  
 
  
  constructor(private _ActivatedRoute: ActivatedRoute, private _HttpClient: HttpClient) { }

  _ProductsService = inject(ProductsService);
  ngOnInit(): void {
    
    

    const id = Number(this._ActivatedRoute.snapshot.paramMap.get('id'));
    this._ProductsService.getProductById(id).subscribe((res) => {
      this.product = res;
    });
  }
}
