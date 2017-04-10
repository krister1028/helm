import { Observable } from 'rxjs/Observable';

export interface IBaseSender {
  dataStream: Observable<any>;
}
