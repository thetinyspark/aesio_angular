import { Component, OnInit } from '@angular/core';
import { CATALOG_MOCK, Product } from '../product';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

  public currentCategory:string = "tech";
  public products:Product[] = CATALOG_MOCK;

  constructor() { }

  ngOnInit(): void {
  }

}
