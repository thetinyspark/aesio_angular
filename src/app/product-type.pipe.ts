import { Pipe, PipeTransform } from '@angular/core';
import { CATEGORY_ALL, Product } from './product';

@Pipe({
  name: 'productType'
})
export class ProductTypePipe implements PipeTransform {

  
  transform(products: Product[], type:string = CATEGORY_ALL): Product[] {
    if( type === CATEGORY_ALL)
      return products;
      
    return products.filter( (value:Product) => value.category.includes(type) );
  }

}
