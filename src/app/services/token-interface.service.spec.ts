import { TestBed } from '@angular/core/testing';

import { TokenInterfaceService } from './token-interface.service';

describe('TokenInterfaceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TokenInterfaceService = TestBed.get(TokenInterfaceService);
    expect(service).toBeTruthy();
  });
});
