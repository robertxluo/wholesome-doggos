import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonLayoutComponent } from './button-layout.component';

describe('ButtonLayoutComponent', () => {
  let component: ButtonLayoutComponent;
  let fixture: ComponentFixture<ButtonLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
