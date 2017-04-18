import { IBaseSender } from '../senders/base-sender.interface';
import { Observable } from 'rxjs/Observable';
import 'rxjs/observable/combineLatest';
import { Injectable } from '@angular/core';

@Injectable()
class TransformerBase implements IBaseSender {
  public dataStream: Observable<any>;
  public units: string;

  protected transformFunction: any;

  protected constructor(private inputStreams: Observable<any>[], units: string) {
    this.units = units;
    this.dataStream = Observable.combineLatest(...inputStreams, this.transformFunction);
  }
}

export class AdditionTransformer extends TransformerBase {

}
