/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SignalKService } from './signal-k.service';

describe('SignalKService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SignalKService]
    });
  });

  it('should ...', inject([SignalKService], (service: SignalKService) => {
    expect(service).toBeTruthy();
  }));
});
