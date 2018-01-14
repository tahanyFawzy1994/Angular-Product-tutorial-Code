import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import {ProductListComponent} from './products/product-list.component'
import { ProductFilterPipe } from './products/product-filter.pipe';
@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
