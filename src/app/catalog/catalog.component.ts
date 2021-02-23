import { Component, OnInit } from '@angular/core';
import { CATALOG_MOCK, CATEGORIES_MOCK, CATEGORY_ALL, DEFAULT_CATEGORY, Product } from '../product';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

  public currentCategory:string = DEFAULT_CATEGORY;
  public products:Product[] = CATALOG_MOCK;
  public categories:string[] = CATEGORIES_MOCK;

  constructor() { }

  ngOnInit(): void {
  }

}
