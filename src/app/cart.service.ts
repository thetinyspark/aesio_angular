import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private products:Product[] = [];

  constructor() { }

  public getAll():Observable<Product[]>{
    return of(this.products);
  }

  public add(product:Product):Observable<boolean>{
    alert("add " + product.name + " to cart !");
    this.products.push(product);
    return of(true);
  }

}
