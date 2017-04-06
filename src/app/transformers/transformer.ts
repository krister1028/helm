import { IBaseSender } from '../senders/base-sender.interface';
import { Observable } from 'rxjs/Observable';
import 'rxjs/observable/combineLatest';

export class Transformer implements IBaseSender {
  public dataStream: Observable<any>;

  constructor(private inputStreams: Observable<any>[], private transformFunction: any) {
    this.dataStream = Observable.combineLatest(...inputStreams, transformFunction);
  }
}
