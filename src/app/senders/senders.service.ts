import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { NetworkSendersService } from './network-senders.service';
import { IBaseSenderService } from './base-sender-service.interface';
import { TransformersService } from '../transformers/transformers.service';
import 'rxjs/add/observable/merge';

@Injectable()
export class SendersService implements IBaseSenderService {
  public senderStream: Observable<any>;
  public unitCount: any = {};

  constructor(private networkSenders: NetworkSendersService, private transformersService: TransformersService) {
    this.senderStream = Observable.merge(
      networkSenders.senderStream,
      transformersService.senderStream
    );

    this.senderStream.subscribe(sender => this.buildUnitCount(sender));
  }

  private buildUnitCount(sender) {
    this.unitCount[sender.units] = (this.unitCount[sender.units] || 0) + 1;
    console.log(this.unitCount);
  }
}
