import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastComponentComponent } from './last-component.component';

describe('LastComponentComponent', () => {
  let component: LastComponentComponent;
  let fixture: ComponentFixture<LastComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LastComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LastComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
