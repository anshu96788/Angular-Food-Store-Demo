import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProductComponent } from './product/product.component';
import {HttpClientModule} from '@angular/common/http';
import { CartComponent } from './cart/cart.component';
import { OrderComponent } from './order/order.component';
import { LogComponent } from './log/log.component';
import { OrderfinComponent } from './orderfin/orderfin.component';
import { AddfruitComponent } from './addfruit/addfruit.component';
import { AdminComponent } from './admin/admin.component'
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductComponent,
    CartComponent,
    OrderComponent,
    LogComponent,
    OrderfinComponent,
    AddfruitComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule, HttpClientModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
