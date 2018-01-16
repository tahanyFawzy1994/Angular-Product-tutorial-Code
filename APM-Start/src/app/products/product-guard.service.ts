import { CanActivate } from "@angular/router";
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot , Router } from "@angular/router";



@Injectable()
export class ProductDetailGuard implements CanActivate{
    constructor(private router : Router){

    }
    // to insure the passed id is a number and > 0
    canActivate(route : ActivatedRouteSnapshot) : boolean{ 
       let id = +route.url[1].path;
       if(isNaN(id) || id<1){
           this.router.navigate(['/products']);//navigate to another url
           return false;
       }
        return true;
    }

}