import { Component } from '@angular/core';
import { PrimeNgModule } from '../../../prime-ng/prime-ng.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-basics-page',
  standalone: true,
  imports: [
    CommonModule,
    PrimeNgModule
  ],
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css'
})
export class BasicsPageComponent {
  public nameLower: string = 'german';
  public nameUpper: string = 'GERMAN';
  public fullName: string = 'gErMaN herNanDEz';

  public customDate: Date = new Date();
}
