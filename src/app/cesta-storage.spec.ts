import { TestBed } from '@angular/core/testing';
import { CestaStorage } from './cesta-storage';

describe('CestaStorage', () => {
  let service: CestaStorage;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CestaStorage);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
