import { Component } from '@angular/core';

@Component({
  selector: 'app-events-component',
  templateUrl: './events-component.component.html',
  styleUrls: ['./events-component.component.css']
})
export class EventsComponentComponent {
  show: boolean = true;

  showMessage(): void{
    this.show = !this.show;
    // !this.show" foi utilizado para fazer uma espécia de "toggle"
  }
}
