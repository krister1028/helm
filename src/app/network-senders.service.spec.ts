import { TestBed, inject } from '@angular/core/testing';

import { NetworkSendersService } from './network-senders.service';

describe('NetworkSendersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NetworkSendersService]
    });
  });

  it('should ...', inject([NetworkSendersService], (service: NetworkSendersService) => {
    expect(service).toBeTruthy();
  }));
});
