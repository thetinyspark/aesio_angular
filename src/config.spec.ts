import { HttpClientModule } from "@angular/common/http";
import { TestBed } from "@angular/core/testing";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { RouterTestingModule } from "@angular/router/testing";
import { of } from "rxjs";
import { AppComponent } from "./app/app.component";
import { CartComponent } from "./app/cart/cart.component";
import { CatalogComponent } from "./app/catalog/catalog.component";
import { DetailComponent } from "./app/detail/detail.component";
import { HomeComponent } from "./app/home/home.component";
import { CATALOG_MOCK, CATEGORIES_MOCK, DEFAULT_CATEGORY } from "./app/product";
import { ProductTypePipe } from "./app/product-type.pipe";
import { ProductService } from "./app/product.service";
import { ProductComponent } from "./app/product/product.component";

export const SPEC_CONFIG: any = {
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
        RouterTestingModule
    ],

    providers: [],
    bootstrap: [AppComponent]
};

export const beforeEachTest = async () => {
    await TestBed.configureTestingModule(SPEC_CONFIG).compileComponents();
    let service = TestBed.inject(ProductService);
    spyOn(service, "getAll").and.returnValue(of(CATALOG_MOCK));
    spyOn(service, "getCategories").and.returnValue(of(CATEGORIES_MOCK));
    spyOn(service, "getDefaultCategory").and.returnValue(of(DEFAULT_CATEGORY));
}; 