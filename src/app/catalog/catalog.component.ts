import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { CATALOG_MOCK, CATEGORIES_MOCK, CATEGORY_ALL, DEFAULT_CATEGORY, Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

  public currentCategory: string = "";
  public products: Product[] = [];
  public categories: string[] = [];


  constructor(private service: ProductService, private cartService: CartService) { }

  ngOnInit(): void {

    this.service.getEverything().subscribe(
      (data) => {
        this.categories = data.categories;
        this.currentCategory = data.defaultCategory;
        this.products = data.products;
      }
    );

  }

  public addToCart(product: Product): void {
    this.cartService.add(product).subscribe(
      (ok: boolean) => {
        if (ok) {
          alert("add " + product.name + " to cart !");
        }
      }
    );
  }

}
