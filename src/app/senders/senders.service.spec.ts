import { TestBed, inject } from '@angular/core/testing';

import { SendersService } from './senders.service';

describe('SendersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SendersService]
    });
  });

  it('should ...', inject([SendersService], (service: SendersService) => {
    expect(service).toBeTruthy();
  }));
});
