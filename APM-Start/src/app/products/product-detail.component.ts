import { IProduct } from "./product";
import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { OnInit } from "@angular/core/src/metadata/lifecycle_hooks";

@Component({
    templateUrl : 'product-detail.component.html'
})

export class ProductDetailComponent implements OnInit{
    ngOnInit(): void {
        let id = this.routeObj.snapshot.params['id'];
        //snapshot because we will initialise every time we visit the page , 
        //use observable if the id will change in the same page
        this.pageTitle += ' : ' + id;
    }
    pageTitle : string = 'Product Details';
    product :IProduct;

    constructor(private routeObj : ActivatedRoute){

    }

}