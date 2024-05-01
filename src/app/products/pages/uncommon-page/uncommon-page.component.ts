import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PrimeNgModule } from '../../../prime-ng/prime-ng.module';
import { Observable, interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  standalone: true,
  imports: [
    CommonModule,
    PrimeNgModule
  ],
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {
  // i18m Select
  public name: string = 'German';
  public gender: 'male'|'female'= 'male';
  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla'
  };

  changeClient(): void{
    this.name= 'Melissa';
    this.gender= 'female';
  }

  // i18n Plural
  public clients: string[] = ['Maria', 'Juán', 'Fernando', 'Germán', 'Eduardo', 'Melissa'];
  public clientsMap = {
    '=0': 'no tenemos ningún cliente esperando',
    '=1': 'tenemos un cliente esperando',
    'other': 'tenemos # clientes esperando'
  };

  deleteClient(): void{
    this.clients.pop();
  }

  // KeyValue Pipe
  public person = {
    name: 'German',
    age: 35,
    address: 'Calle 123'
  };

  // Async Pipe
  public myObservableTimer: Observable<number> = interval(2000).pipe(
    tap(value => console.log('tap: ', value))
  );

  public promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data en la promesa');
      console.log('Tenemos data en la promesa');
      this.person.name = 'Otro nombre';
    }, 3500);
  });
}
