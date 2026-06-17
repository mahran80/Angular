import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private apiUrl = 'https://dummyjson.com/products';

  constructor(private http: HttpClient) {}

  // Get list of all products
  getProducts(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  // Search products based on a keyword
  searchProducts(keyword: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/search?q=${keyword}`);
  }

  // NEW: Get a single product by its ID
  getProductByID(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
}