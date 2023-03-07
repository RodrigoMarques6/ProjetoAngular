import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlgumasExplicacoesComponent } from './algumas-explicacoes.component';

describe('AlgumasExplicacoesComponent', () => {
  let component: AlgumasExplicacoesComponent;
  let fixture: ComponentFixture<AlgumasExplicacoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlgumasExplicacoesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlgumasExplicacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
