import { Component, OnInit, inject } from '@angular/core';
import { CurrencyPipe, UpperCasePipe } from '@angular/common';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CurrencyPipe, UpperCasePipe],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {
  ProductList: any[] = [];
  productService = inject(ProductsService);

  // Load products when component initializes
  ngOnInit(): void {
    this.productService.getProducts().subscribe({
      next: (res) => {
        this.ProductList = res.products; 
      }
    });
  }
}