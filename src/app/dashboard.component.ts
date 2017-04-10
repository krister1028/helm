import { Component, OnInit } from '@angular/core';
import { IBaseSender } from './senders/base-sender.interface';
import { SendersService } from './senders/senders.service';
import { TransformersService } from './transformers/transformers.service';
import { simpleAdd } from './transformers/transformer.functions';

@Component({
  selector: 'helm-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  public senders: IBaseSender[] = [];
  public label;
  public value;

  constructor(private sendersService: SendersService, private transformerService: TransformersService) {}

  ngOnInit() {
    this.sendersService.senderStream.subscribe(next => this.senders.push(next));
  }

  public combineStreams() {
    this.transformerService.addTransformedStream([this.senders[0].dataStream, this.senders[1].dataStream], simpleAdd);
  }
}
