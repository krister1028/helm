import { IBaseSender } from './base-sender.interface';
import { Observable } from 'rxjs/Observable';
import skSchemaKeys from 'signalk-schema/keyswithmetadata.json';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';

export class NetworkSender implements IBaseSender {
  public dataStream: Observable<any>;
  public units: string;

  constructor(private nodeKey: string, private updateStream) {
    this.buildStream();
    this.readUnits();
  }

  private buildStream() {
    this.dataStream = this.updateStream.filter(update => update.values.filter(v => v.path === this.nodeKey).length)
      .map(update => update.values.filter(v => v.path === this.nodeKey)[0]);
  }

  private readUnits() {
    const key = `/vessels/*/${this.nodeKey.split('.').join('/')}`;
    const units = skSchemaKeys[key].units;
    // TODO: units is undefined in some cases (e.g. position, where value isn't primitive)
    // not sure how to handle that one yet...
    if (units) {
      this.units = units;
    }
  }
}
