import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  userName = 'Rodrigo';
  userData = {
    email: 'rodrigo@email.com',
    phone: 8296964343,
  };
  fourthComponentName = 'Testando o fluxo de componentes';

  title = 'ProjetoAngular';
}
