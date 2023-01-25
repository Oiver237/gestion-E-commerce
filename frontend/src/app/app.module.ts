import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { NewsletterComponent } from './layout/newsletter/newsletter.component';
import { MenuComponent } from './layout/menu/menu.component';
import { CartComponent } from './page/cart/cart.component';
import { CheckoutComponent } from './page/checkout/checkout.component';
import { DetailComponent } from './page/detail/detail.component';
import { ShopComponent } from './page/shop/shop.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    NewsletterComponent,
    MenuComponent,
    CartComponent,
    CheckoutComponent,
    DetailComponent,
    ShopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
