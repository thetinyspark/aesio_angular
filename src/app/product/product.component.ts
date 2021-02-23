import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {


  @Input()
  public thumb:boolean = true;

  @Input()
  public data:Product|null = null;

  public detailUrl:string = "";

  constructor() { }

  ngOnInit(): void {
    if( this.data !== null ){
      this.detailUrl = '/detail/' + this.data.id;
    }
  }

}
