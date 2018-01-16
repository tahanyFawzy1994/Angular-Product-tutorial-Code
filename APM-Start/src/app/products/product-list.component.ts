import { Component } from "@angular/core";
import { IProduct } from "./product";
import { OnInit } from "@angular/core/src/metadata/lifecycle_hooks";
import { ProductService } from "./product.service";
import { error } from "selenium-webdriver";

@Component({
    selector : 'pm-products',
    moduleId : module.id,
    templateUrl : 'product-list.component.html',
    styleUrls : ['product-list.component.css']
})
export class ProductListComponent implements OnInit{
    pageTitle : string = "Products List";
    imageSize : number = 50;
    showImage : boolean = false;
    listFilter : string ='a';
    errorMessage : string = 'Error in get products'
    products : IProduct[];

    //need to inject service
    constructor(private productServiceObj : ProductService){
    }
    
    toggleImage() : void{
        this.showImage = !this.showImage;
    }
    
    ngOnInit() : void {
        //will fill the array in initialization
        this.productServiceObj.getProducts()
        .subscribe(products => this.products = products ,
        error=>this.errorMessage = <any>error);
    }
    
    onRatingClicked(msg :string){
        this.pageTitle = 'PageList : '+msg;
        
    }
}