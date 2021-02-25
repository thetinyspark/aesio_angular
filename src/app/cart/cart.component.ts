import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Product } from '../product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public cart:Product[] = [];
  public totalHT:number = 0;
  public totalTTC:number = 0;

  constructor(private service:CartService) { }

  ngOnInit(): void {
    this.refresh();
  }

  refresh(){
    this.service.getEverything().subscribe( 
      (data) => {
        this.cart = data.cart;
        this.totalHT = data.ht;
        this.totalTTC = data.ttc;
      }
    );
  }

  onRemove(product:Product):void{
    this.service.remove(product).subscribe( 
      (ok:boolean) => {
        if( ok ){
          alert("remove " + product.name + " from cart !");
        }
        this.refresh();
      }
    )
  }

}
