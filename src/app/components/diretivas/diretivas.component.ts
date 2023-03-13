import { Component } from '@angular/core';

@Component({
  selector: 'app-diretivas',
  templateUrl: './diretivas.component.html',
  styleUrls: ['./diretivas.component.css'],
})
export class DiretivasComponent {
  background = 'red';
  border = '2px solid blue';
  padding = '20px';
  border_radius = '10px';
  color = 'white';

  classes = ['classe1', 'classe2'];
}
