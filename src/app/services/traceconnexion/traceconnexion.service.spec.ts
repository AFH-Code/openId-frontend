import { TestBed } from '@angular/core/testing';

import { TraceconnexionService } from './traceconnexion.service';

describe('TraceconnexionService', () => {
  let service: TraceconnexionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TraceconnexionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
