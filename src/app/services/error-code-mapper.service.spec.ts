import { TestBed, inject } from '@angular/core/testing';

import { ErrorCodeMapperService } from './error-code-mapper.service';

describe('ErrorCodeMapperService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ErrorCodeMapperService]
    });
  });

  it('should be created', inject([ErrorCodeMapperService], (service: ErrorCodeMapperService) => {
    expect(service).toBeTruthy();
  }));
});
