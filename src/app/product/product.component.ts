import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
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

  @Output()
  public onProductClick:EventEmitter<Product>;

  public detailUrl:string = "";

  constructor( ) { 
    this.onProductClick = new EventEmitter<Product>();
  }

  ngOnInit(): void {
    if( this.data !== null ){
      this.detailUrl = '/detail/' + this.data.id;
    }
  }

  public onClick(){
    if( this.data !== null )
      this.onProductClick.emit(this.data);
  }

}
