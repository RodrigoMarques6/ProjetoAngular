import { Component } from '@angular/core';

@Component({
  selector: 'app-second-component',
  templateUrl: './second-component.component.html',
  styleUrls: ['./second-component.component.css'],
})
export class SecondComponentComponent {
  name: string = 'Outro Rodrigo';
  age: number = 26;
  profession: string = 'Administrador';
  height: number = 1.82;
}
