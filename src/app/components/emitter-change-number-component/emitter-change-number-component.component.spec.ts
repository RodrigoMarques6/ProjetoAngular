import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmitterChangeNumberComponentComponent } from './emitter-change-number-component.component';

describe('EmitterChangeNumberComponentComponent', () => {
  let component: EmitterChangeNumberComponentComponent;
  let fixture: ComponentFixture<EmitterChangeNumberComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmitterChangeNumberComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmitterChangeNumberComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
