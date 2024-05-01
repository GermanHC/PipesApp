import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PrimeNgModule } from '../../../prime-ng/prime-ng.module';

import { Color, Hero } from '../../interfaces/hero.interface';

import { ToggleCasePipe } from '../../pipes/toggle-case.pipe';
import { CanFlyPipe } from '../../pipes/can-fly.pipe';
import { SortByPipe } from "../../pipes/sort-by.pipe";

@Component({
    selector: 'products-order',
    standalone: true,
    templateUrl: './order.component.html',
    styles: ``,
    imports: [
        CommonModule,
        PrimeNgModule,
        CanFlyPipe,
        ToggleCasePipe,
        SortByPipe
    ]
})
export class OrderComponent {
  public isUpperCase: boolean = false;
  public orderBy?: keyof Hero;

  public heroes: Hero[] = [
    { name: 'Superman', canFly: true, color: Color.blue },
    { name: 'Batman', canFly: false, color: Color.black },
    { name: 'Daredevil', canFly: false, color: Color.red },
    { name: 'Robin', canFly: false, color: Color.red },
    { name: 'Green Lintern', canFly: true, color: Color.green }
  ];

  public toggleUpperCase(): void {
    this.isUpperCase = !this.isUpperCase;
  }

  public changeOrder(value: keyof Hero): void {
    this.orderBy = value;
  }
}
