import { CATALOG_MOCK, CATEGORIES_MOCK, CATEGORY_ALL, Product } from './product';
import { ProductTypePipe } from './product-type.pipe';

describe(
  'ProductTypePipe test suite',
  () => {

    fit(
      'create an instance',
      () => {
        const pipe = new ProductTypePipe();
        expect(pipe).toBeTruthy();
      }
    );

    fit(
      'should not filter products',
      () => {
        const pipe = new ProductTypePipe();
        const type: string = CATEGORY_ALL;
        const results: Product[] = pipe.transform(CATALOG_MOCK, type);
        expect(results.length).toEqual(CATALOG_MOCK.length);
      }
    );

    fit(
      'should filter products by type (category',
      () => {
        const pipe = new ProductTypePipe();

        for (let i: number = 0; i < CATEGORIES_MOCK.length; i++) {
          if (CATEGORIES_MOCK[i] === CATEGORY_ALL)
            continue;

          const type: string = CATEGORIES_MOCK[i];
          const results: Product[] = pipe.transform(CATALOG_MOCK, type);

          for( let j:number = 0; j < results.length; j++ ){
            expect(results[j].category).toContain(type); 
          }

        }
      }
    ); 

    fit( 
      'should returns 0 products', 
      () => {
        const pipe = new ProductTypePipe();
        const type: string = "unknown";
        const results: Product[] = pipe.transform(CATALOG_MOCK, type);
        expect(CATEGORIES_MOCK).not.toContain(type);
        expect(results.length).toEqual(0);
      }
    )

  }
);
