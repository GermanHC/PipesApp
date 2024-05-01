import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { RouterOutlet } from '@angular/router';

import { SharedModule } from "./shared/shared.module";
import { MenuComponent } from "./shared/components/menu/menu.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [
        CommonModule,
        MenuComponent,
        SharedModule,
        RouterOutlet,
    ]
})
export class AppComponent implements OnInit {
  constructor(private primengConfig: PrimeNGConfig) {}

    ngOnInit() {
        this.primengConfig.ripple = true;
    }

}
