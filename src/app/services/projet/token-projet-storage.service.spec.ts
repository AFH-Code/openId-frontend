import { TestBed } from '@angular/core/testing';

import { TokenProjetStorageService } from './token-projet-storage.service';

describe('TokenProjetStorageService', () => {
  let service: TokenProjetStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TokenProjetStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
