import { Injectable } from '@angular/core';
import { SignalKService } from './signal-k.service';
import { NetworkSender } from './network-sender';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { IBaseSenderService } from './base-sender-service.interface';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/share';

@Injectable()
export class NetworkSendersService implements IBaseSenderService {
  public senderStream: Subject<NetworkSender> = new Subject();
  private nodes: Set<string> = new Set;
  private updateStream: Observable<any>;

  constructor(private sKService: SignalKService) {
    this.updateStream = this.createUpdateStream();
    this.updateStream.subscribe(updates => this.checkChannels(updates));
  }

  private createUpdateStream(): Observable<any> {
    return this.sKService.dataStream
      .filter(message => message.hasOwnProperty('updates'))
      // TODO: what's with the zero index on the array?  are we sure we always want the first element?
      .map(message => message.updates[0]).share();
  }

  private checkChannels(updates): void {
    updates.values.forEach(v => {
      if (!this.nodes.has(v.path)) {
        this.nodes.add(v.path);
        this.senderStream.next(new NetworkSender(v.path, this.updateStream));
      }
    });
  }
}
