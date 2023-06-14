import { TestBed } from '@angular/core/testing';

import { QuantumElementsService } from './quantum-elements.service';

describe('QuantumElementsService', () => {
  let service: QuantumElementsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuantumElementsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
