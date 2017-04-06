import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { NetworkSendersService } from './network-senders.service';
import { IBaseSenderService } from './base-sender-service.interface';

@Injectable()
export class SendersService implements IBaseSenderService {
  public senderStream: Observable<any>;

  constructor(private networkSenders: NetworkSendersService) {
    this.senderStream = networkSenders.senderStream;
  }
}
