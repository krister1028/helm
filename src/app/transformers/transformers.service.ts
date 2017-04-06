import { Injectable } from '@angular/core';
import { IBaseSenderService } from '../senders/base-sender-service.interface';
import { Subject } from 'rxjs/Subject';
import { Transformer } from './transformer';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/combineLatest';

@Injectable()
export class TransformersService implements IBaseSenderService {
  public senderStream: Subject<Transformer> = new Subject();

  constructor() { }

  addTransformedStream(streams: Observable<any>[], transformFunc: any) {
    this.senderStream.next(new Transformer(streams, transformFunc));
  }

}
