import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuantumElementsComponent } from './quantum-elements.component';

describe('QuantumElementsComponent', () => {
  let component: QuantumElementsComponent;
  let fixture: ComponentFixture<QuantumElementsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuantumElementsComponent]
    });
    fixture = TestBed.createComponent(QuantumElementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
