import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { SecondComponentComponent } from './components/second-component/second-component.component';
import { ThirdComponentComponent } from './components/third-component/third-component.component';
import { ParentComponentComponent } from './components/parent-component/parent-component.component';
import { AlgumasExplicacoesComponent } from './components/algumas-explicacoes/algumas-explicacoes.component';
import { FourthComponentComponent } from './components/fourth-component/fourth-component.component';
import { DiretivasComponent } from './components/diretivas/diretivas.component';
import { LastComponentComponent } from './components/last-component/last-component.component';
import { EventsComponentComponent } from './components/events-component/events-component.component';
import { EmitterComponentComponent } from './components/emitter-component/emitter-component.component';
import { EmitterChangeNumberComponentComponent } from './components/emitter-change-number-component/emitter-change-number-component.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    SecondComponentComponent,
    ThirdComponentComponent,
    ParentComponentComponent,
    AlgumasExplicacoesComponent,
    FourthComponentComponent,
    DiretivasComponent,
    LastComponentComponent,
    EventsComponentComponent,
    EmitterComponentComponent,
    EmitterChangeNumberComponentComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
