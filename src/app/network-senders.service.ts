import { Injectable } from '@angular/core';
import { SignalKService } from './signal-k.service';
import { NetworkSender } from './senders/network-sender';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/share';

@Injectable()
export class NetworkSendersService {
  public nodes: Set<string> = new Set;
  public networkSenders: NetworkSender[] = [];
  public updateStream: Observable<any>;

  constructor(private sKService: SignalKService) {
    this.updateStream = sKService.dataStream
      .filter(message => message.hasOwnProperty('updates'))
      // TODO: what's with the zero index on the array?  are we sure we always want the first element?
      .map(message => message.updates[0]).share();
    this.updateStream.subscribe(updates => this.checkChannels(updates));
  }

  private checkChannels(updates): void {
    updates.values.forEach(v => {
      if (!this.nodes.has(v.path)) {
        this.nodes.add(v.path);
        this.spawnNetworkSender(v.path);
      }
    });
  }

  private spawnNetworkSender(nodeKey: string): void {
    this.networkSenders.push(new NetworkSender(nodeKey, this.updateStream));
  }

}
