import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicsPageComponent } from './pages/basics-page/basics-page.component';
import { NumbersPageComponent } from './pages/numbers-page/numbers-page.component';
import { OrderComponent } from './pages/order/order.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { ProductsRoutingModule } from './products-routing.module';
import { UncommonPageComponent } from './pages/uncommon-page/uncommon-page.component';

@NgModule({
  imports: [
    BasicsPageComponent,
    CommonModule,
    NumbersPageComponent,
    OrderComponent,
    PrimeNgModule,
    ProductsRoutingModule,
    UncommonPageComponent,
  ],
  exports: [ ]
})
export class ProductsModule { }
