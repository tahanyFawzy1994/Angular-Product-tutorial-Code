import { NgModule } from "@angular/core";
import { StarComponent } from "./star.component";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { ConvertToSpaces } from "./convertToSpaces.pipe";

@NgModule({
    declarations : [
        StarComponent,
        ConvertToSpaces
    ],
    imports :[CommonModule],
    exports:[
        CommonModule,//instead of browser module
        FormsModule,
        StarComponent,
        ConvertToSpaces
    ]
})
export class SharedModule{

}