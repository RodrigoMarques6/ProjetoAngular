import { Component } from '@angular/core';

@Component({
  selector: 'app-third-component',
  templateUrl: './third-component.component.html',
  styleUrls: ['./third-component.component.css'],
})
export class ThirdComponentComponent {
  name: string = 'Mais outro Rodrigo';
  age: number = 26;
  profession: string = 'Contador';
  height: number = 1.82;
}
