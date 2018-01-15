import { IProduct } from "./product";
import { Injectable } from "@angular/core";
import { Http , Response} from "@angular/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class ProductService{
    private productsURL = 'api/products/products.json';//can use real url
    
    constructor(private httpObj : Http){}
    
    getProducts() : Observable<IProduct[]>{
        return this.httpObj.get(this.productsURL)
        //use map to cast http responce to json
        .map((response : Response)=><IProduct[]> response.json())
        .do(data=>console.log(JSON.stringify(data)))
        .catch(this.handleError);
    }
    
    private handleError(error : Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}