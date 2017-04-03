import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class SignalKService {
  public dataStream;
  private socketAddress = 'ws://demo.signalk.org/signalk/v1/stream?subscribe=self';
  private ws: WebSocket;

  constructor() {
    this.ws = new WebSocket(this.socketAddress);
    this.createDataStream();
  }

  private createDataStream(): void {
    this.dataStream = Observable.create(obs => this.ws.onmessage = m => obs.next(JSON.parse(m.data)));
  }
}
