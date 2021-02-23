import { Injectable }           from '@angular/core';
import { Product }              from './product';
import { HttpClient }           from "@angular/common/http";
import { forkJoin, Observable } from 'rxjs';
import { map }                  from 'rxjs/operators';
import { environment }          from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(environment.productsUrl);
  }

  public getById(id: number): Observable<Product | null> {
    return this.getAll().pipe(
      map(
        (products: Product[]) => {

          for (let i: number = 0; i < products.length; i++) {
            if (products[i].id === id)
              return products[i];
          }

          return null;
        }
      )
    )
  }

  public getCategories(): Observable<string[]> {
    return this.http.get<string[]>(environment.categoriesUrl);
  }

  public getDefaultCategory(): Observable<string> {
    return this.http.get(environment.defaultCategoryUrl).pipe(
      map(
        (data: any) => {
          return data.category as string;
        }
      )
    );
  }

  public getEverything(): Observable<{ products: Product[], defaultCategory: string, categories: string[] }> {

    return forkJoin(
      {
        products: this.getAll(),
        defaultCategory: this.getDefaultCategory(),
        categories: this.getCategories()
      }
    );

  }
}
