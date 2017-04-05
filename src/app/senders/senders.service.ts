import { Injectable } from '@angular/core';
import { NetworkSendersService } from './network-senders.service';

@Injectable()
export class SendersService {
  public senders;

  constructor(private networkSenders: NetworkSendersService) { }

}
