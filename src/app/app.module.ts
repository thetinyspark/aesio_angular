import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { CatalogComponent } from './catalog/catalog.component';
import { ProductTypePipe } from './product-type.pipe';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CatalogComponent,
    ProductTypePipe,
    HomeComponent,
    DetailComponent,
    CartComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    BrowserModule, 
    RouterModule.forRoot( 
      [
        {
          path: "home", 
          component: HomeComponent
        }, 
        {
          path: "catalog", 
          component: CatalogComponent
        }, 
        {
          path: "detail/:id", 
          component: DetailComponent
        }
      ]
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
