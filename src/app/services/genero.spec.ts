import { TestBed } from '@angular/core/testing';

import { GeneroService } from './genero.service';

describe('EstilosService', () => {
  let service: GeneroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeneroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
