import { IProduct } from "./product";
import { Component } from "@angular/core";
import { ActivatedRoute ,Router} from "@angular/router";
import { OnInit } from "@angular/core/src/metadata/lifecycle_hooks";
import { ProductService } from "./product.service";

@Component({
    templateUrl : 'product-detail.component.html'
})

export class ProductDetailComponent implements OnInit{
    
    pageTitle : string = 'Product Details';
    product :IProduct;
    errorMessage :string = 'Error in displaying this product';
    constructor(private routeObj : ActivatedRoute,
                private router : Router,
                private productService: ProductService){

    }
    ngOnInit(): void {
        let id = this.routeObj.snapshot.params['id'];
        //snapshot because we will initialise every time we visit the page , 
        //use observable if the id will change in the same page
        this.getProduct(id);
    }
    getProduct(id : number) :void{
        this.productService.getProduct(id).subscribe(product => this.product = product,
            error=>this.errorMessage = <any>error);
    }
    onBack() :void{
        this.router.navigate(['/products']);
    }
}