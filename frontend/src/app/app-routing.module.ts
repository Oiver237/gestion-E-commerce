import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './layout/menu/menu.component';
import { CartComponent } from './page/cart/cart.component';
import { CheckoutComponent } from './page/checkout/checkout.component';
import { DetailComponent } from './page/detail/detail.component';
import { ShopComponent } from './page/shop/shop.component';

const routes: Routes = [
  {path: "home", component:MenuComponent},
  {path: "cart", component:CartComponent},
  {path: "checkout", component:CheckoutComponent},
  {path: "shop", component:ShopComponent},
  {path: "detail", component:DetailComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
