import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { beforeEachTest } from 'src/config.spec';
import { CATALOG_MOCK, CATEGORIES_MOCK, DEFAULT_CATEGORY, Product } from './product';

import { ProductService } from './product.service';

describe('ProductService', () => {
  let service: ProductService;

  beforeEach(beforeEachTest);

  beforeEach( () => service = TestBed.inject(ProductService) )


  fit ( 
    'should return everything', 
    () => {
      service.getEverything().subscribe( 
        (data) => {
          expect(data.products).toBe(CATALOG_MOCK);
          expect(data.defaultCategory).toBe(DEFAULT_CATEGORY);
          expect(data.categories).toBe(CATEGORIES_MOCK);
        }
      );
    }
  );


  fit(
    'should be created',
    () => {
      expect(service).toBeTruthy();
    }
  );

  fit(
    'should return products' , 
    () => {
      const first:Product|null = CATALOG_MOCK[0];
  
      service.getById(first.id).subscribe( 
        (data:Product|null) => {
          expect(first).toBe(data as Product);
        }
      ); 

    }
  ); 

 

  

});
