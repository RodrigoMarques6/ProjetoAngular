import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { SecondComponentComponent } from './components/second-component/second-component.component';
import { ThirdComponentComponent } from './components/third-component/third-component.component';
import { ParentComponentComponent } from './components/parent-component/parent-component.component';
import { AlgumasExplicacoesComponent } from './components/algumas-explicacoes/algumas-explicacoes.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    SecondComponentComponent,
    ThirdComponentComponent,
    ParentComponentComponent,
    AlgumasExplicacoesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
