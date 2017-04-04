import { BaseSender } from './base-sender';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';

export class NetworkSender extends BaseSender {
  public dataStream: Observable<any>;

  constructor(private nodeKey: string, private updateStream) {
    super();
    this.buildStream();
  }

  private buildStream() {
    this.dataStream = this.updateStream.filter(update => update.values.filter(v => v.path === this.nodeKey).length)
      .map(update => update.values.filter(v => v.path === this.nodeKey)[0]);
  }
}
