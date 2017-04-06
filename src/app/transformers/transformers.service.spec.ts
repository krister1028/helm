import { TestBed, inject } from '@angular/core/testing';

import { TransformersService } from './transformers.service';

describe('TransformersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TransformersService]
    });
  });

  it('should ...', inject([TransformersService], (service: TransformersService) => {
    expect(service).toBeTruthy();
  }));
});
