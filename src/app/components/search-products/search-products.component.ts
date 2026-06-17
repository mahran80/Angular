import { Component, inject } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { FormsModule } from '@angular/forms';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-search-products',
  standalone: true,
  imports: [FormsModule, CurrencyPipe],
  templateUrl: './search-products.component.html',
  styleUrl: './search-products.component.css'
})
export class SearchProductsComponent {
  keyword: string = '';
  searchResults: any[] = [];
  productsService = inject(ProductsService);

  // Trigger search API
  search() {
    if (this.keyword.trim()) {
      this.productsService.searchProducts(this.keyword).subscribe({
        next: (res) => {
          this.searchResults = res.products; 
        }
      });
    }
  }
}