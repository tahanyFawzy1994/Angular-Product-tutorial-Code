import { NgModule } from "@angular/core";
import { ProductDetailComponent } from "./product-detail.component";
import { ProductListComponent } from "./product-list.component";
import { ProductFilterPipe } from "./product-filter.pipe";
import { StarComponent } from "../shared/star.component";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { ProductDetailGuard } from "./product-guard.service";
import { ProductService } from "./product.service";
import { SharedModule } from "../shared/shared.module";

@NgModule({
    declarations:[
        ProductDetailComponent,
        ProductListComponent,
        ProductFilterPipe
    ],
    imports :[
        RouterModule.forChild([
            {path : 'products' , component : ProductListComponent},
            {path : 'product/:id' ,canActivate :[ProductDetailGuard] ,component : ProductDetailComponent},//to pass parameter
            {path : '' ,redirectTo:'welcome', pathMatch : 'full'},//the default if nothing entered or on the application load
            {path : '**' , redirectTo:'welcome', pathMatch : 'full'}//for any other path
          ]),
          SharedModule
    ],
    providers : [ProductService,
        ProductDetailGuard]
})
export class ProductModule{

}