import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SignalKService {
  public data;
  private socketAddress: string = 'ws://demo.signalk.org/signalk/v1/stream?subscribe=self';

  constructor() {
    const ws = new WebSocket(this.socketAddress);

    this.data = Observable.create(obs => {
      ws.onmessage = obs.next.bind(obs);
    });
  }
}
