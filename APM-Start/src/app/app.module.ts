import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import {ProductListComponent} from './products/product-list.component'
import { ProductFilterPipe } from './products/product-filter.pipe';
import { StarComponent } from './shared/star.component';
import { HttpModule } from '@angular/http';
import { ProductDetailComponent } from './products/product-detail.component';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from './home/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ProductListComponent,
    ProductFilterPipe,
    StarComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {path : 'products' , component : ProductListComponent},
      {path : 'welcome' , component : WelcomeComponent},
      {path : 'product/:id' , component : ProductDetailComponent},
      {path : '' ,redirectTo:'welcome', pathMatch : 'full'},//the default if nothing entered or on the application load
      {path : '**' , redirectTo:'welcome', pathMatch : 'full'}//for any other path
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
