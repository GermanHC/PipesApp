import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { PrimeNgModule } from '../../../prime-ng/prime-ng.module';

@Component({
  selector: 'app-numbers-page',
  standalone: true,
  imports: [
    CommonModule,
    PrimeNgModule
  ],
  templateUrl: './numbers-page.component.html',
  styleUrl: './numbers-page.component.css'
})
export class NumbersPageComponent {
  public totalSells: number = 1234567.8954;
  public percent: number = 0.4856;
}
