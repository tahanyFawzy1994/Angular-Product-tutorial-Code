import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from './home/welcome.component';
import { ProductModule } from './products/product.module';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([
      {path : 'welcome' , component : WelcomeComponent},
      {path : '' ,redirectTo:'welcome', pathMatch : 'full'},//the default if nothing entered or on the application load
      {path : '**' , redirectTo:'welcome', pathMatch : 'full'}//for any other path
    ]),
    ProductModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
