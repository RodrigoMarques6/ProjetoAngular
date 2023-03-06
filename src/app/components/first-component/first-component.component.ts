import { Component } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css'],
})
export class FirstComponentComponent {
  name: string = 'Rodrigo';
  age: number = 26;
  profession: string = 'Programador';
  height: number = 1.82;
}
