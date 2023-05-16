import { Component } from '@angular/core';

@Component({
  selector: 'app-emitter-change-number-component',
  templateUrl: './emitter-change-number-component.component.html',
  styleUrls: ['./emitter-change-number-component.component.css']
})
export class EmitterChangeNumberComponentComponent {
  handleClick(): any {
    console.log('Mudou o número')
  }
}
