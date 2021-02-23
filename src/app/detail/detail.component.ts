import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Params } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {


  public data: Product | null = null;

  constructor(
    private route: ActivatedRoute,
    private service: ProductService
  ) { }


  ngOnInit(): void {
    this.route.paramMap.subscribe(
      
      (parameters: ParamMap) => {

        const id: string | null = parameters.get("id");

        if( id !== null ){

          this.service.getById(parseInt(id)).subscribe( 

            (product:Product|null ) => {
              this.data = product;
            }

          );

        }

      }
    );
  }

}
