import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { WelcomeComponent } from "../home/welcome.component";

@NgModule({
    imports : [
        RouterModule.forRoot([
            {path : 'welcome' , component : WelcomeComponent},
            {path : '' ,redirectTo:'welcome', pathMatch : 'full'},//the default if nothing entered or on the application load
            {path : '**' , redirectTo:'welcome', pathMatch : 'full'}//for any other path      
        ])
    ],
    exports : [RouterModule]
})
export class AppRoutingModule{}