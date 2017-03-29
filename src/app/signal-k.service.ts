import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class SignalKService {
  public data;
  public nodes: Set<string>;
  private socketAddress: string = 'ws://demo.signalk.org/signalk/v1/stream?subscribe=self';
  private ws: WebSocket;

  constructor() {
    this.ws = new WebSocket(this.socketAddress);
    this.nodes = new Set;
    this.configureSocket();
  }

  private configureSocket(): void {
    this.data = Observable.create(obs => {
      this.ws.onmessage = m => {
        obs.next(m);
        this.parseChannels(m.data);
      };
    });
  }

  private parseChannels(signalKStream: string) {
    const signalKObj = JSON.parse(signalKStream);
    try {
      signalKObj.updates[0].values.forEach(v => this.nodes.add(v.path));
    } catch (err) {
      if (err.name !== 'TypeError') {
        throw err;
      }
    }
  }
}
