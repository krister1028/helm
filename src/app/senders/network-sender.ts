import { IBaseSender } from './base-sender.interface';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';

export class NetworkSender implements IBaseSender {
  public dataStream: Observable<any>;

  constructor(private nodeKey: string, private updateStream) {
    this.buildStream();
  }

  private buildStream() {
    this.dataStream = this.updateStream.filter(update => update.values.filter(v => v.path === this.nodeKey).length)
      .map(update => update.values.filter(v => v.path === this.nodeKey)[0]);
  }
}
