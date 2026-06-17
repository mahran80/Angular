import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CurrencyPipe } from '@angular/common';
import { ProductsService } from '../../services/products.service';
import { IProduct } from '../../common/interfaces/iproduct';

@Component({
  selector: 'app-product-details',
  standalone: true,
  // Add required tools
  imports: [CurrencyPipe, RouterLink],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit {
  productID: number = 0;
  productInfo: IProduct | undefined;

  // Inject the service and route (Method 2)
  constructor(
    private route: ActivatedRoute,
    private prdService: ProductsService
  ) {}

  ngOnInit(): void {
    // Read the ID from the URL and convert it to a number
    this.productID = Number(this.route.snapshot.paramMap.get('id'));
    
    // Fetch the specific product from the service
    this.productInfo = this.prdService.getProductByID(this.productID);
  }
}