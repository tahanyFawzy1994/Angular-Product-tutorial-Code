import { IProduct } from "./product";
import { Component } from "@angular/core";

@Component({
    templateUrl : 'product-detail.component.html'
})

export class ProductDetailComponent{
    pageTitle : string = 'Product Details';
    product :IProduct;
}