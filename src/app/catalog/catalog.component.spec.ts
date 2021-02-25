import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { beforeEachTest, SPEC_CONFIG } from 'src/config.spec';
import { CATALOG_MOCK, CATEGORIES_MOCK, DEFAULT_CATEGORY, Product } from '../product';
import { ProductTypePipe } from '../product-type.pipe';
import { ProductService } from '../product.service';
import { ProductComponent } from '../product/product.component';

import { CatalogComponent } from './catalog.component';

describe('CatalogComponent', () => {
  let component: CatalogComponent;
  let fixture: ComponentFixture<CatalogComponent>;

  beforeEach( beforeEachTest );

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  fit('should create', () => {
    expect(component).toBeTruthy();
  });

  fit( 
    'should have all categories', 
    () => {
      const fixture = TestBed.createComponent(CatalogComponent);
      fixture.detectChanges();
      const compiled = fixture.nativeElement;

      for( let i:number = 0; i < CATEGORIES_MOCK.length; i++ ){
        expect(compiled.querySelector('select').textContent).toContain(CATEGORIES_MOCK[i]);
      }
    }
  ); 

  
  fit( 
    'should have all products', 
    () => {
      const fixture = TestBed.createComponent(CatalogComponent);
      fixture.detectChanges();
      const compiled = fixture.nativeElement;

      for( let i:number = 0; i < CATALOG_MOCK.length; i++ ){
        expect(compiled.querySelector('.catalog').textContent).toContain(CATALOG_MOCK[i].name);
      }
    }
  ); 

});
