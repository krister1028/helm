import { Injectable } from '@angular/core';
import { IBaseSenderService } from '../senders/base-sender-service.interface';
import { Observable } from 'rxjs/Observable';
import { Transformer } from './transformer';

@Injectable()
export class TransformersService implements IBaseSenderService {
  public senderStream: Observable<Transformer>;
  private
  constructor() { }

}
