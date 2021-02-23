import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './product';

@Pipe({
  name: 'productType'
})
export class ProductTypePipe implements PipeTransform {

  transform(products: Product[], type:string = "all"): Product[] {
    if( type === "all")
      return products;
      
    return products.filter( (value:Product) => value.category.includes(type) );
  }

}
