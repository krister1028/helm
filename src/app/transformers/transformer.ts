import { IBaseSender } from '../senders/base-sender.interface';
import { Observable } from 'rxjs/Observable';

export class Transformer implements IBaseSender {
  public dataStream: Observable<any>;

  constructor(private inputStreams: Observable<any>[], private transformFunction: any) {

  }
}
