import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';

export class NetworkSender {
  public dataStream;

  constructor(private nodeKey: string, private updateStream) {
    this.buildStream();
  }

  private buildStream() {
    this.dataStream = this.updateStream.filter(update => update.values.filter(v => v.path === this.nodeKey).length)
      .map(update => update.values.filter(v => v.path === this.nodeKey)[0]);
  }
}
