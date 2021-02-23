import { Injectable } from '@angular/core';
import { Product } from './product';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  public getAll():Observable<Product[]>{
    return this.http.get<Product[]>(environment.productsUrl);
  }

  public getCategories():Observable<string[]>{
    return this.http.get<string[]>(environment.categoriesUrl);
  }

  public getDefaultCategory():Observable<string>{
    return this.http.get(environment.defaultCategoryUrl).pipe(
      map(
        (data:any) => {
          return data.category as string;
        }
      )
    );
  }
}
