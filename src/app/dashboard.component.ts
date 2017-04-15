import { Component, OnInit } from '@angular/core';
import { IBaseSender } from './senders/base-sender.interface';
import { SendersService } from './senders/senders.service';
import { TransformersService } from './transformers/transformers.service';
import { simpleAdd } from './transformers/transformer.functions';
import { MdDialog, MdDialogRef } from '@angular/material';
import { CombineStreamsDialogComponent } from './transformers/combine-streams.dialog.component';

@Component({
  selector: 'helm-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  public senders: IBaseSender[] = [];
  public label;
  public value;

  constructor(
    private sendersService: SendersService, private transformerService: TransformersService, private dialog: MdDialog
  ) {}

  ngOnInit() {
    this.sendersService.senderStream.subscribe(next => this.senders.push(next));
  }

  public combineStreams() {
    this.dialog.open(CombineStreamsDialogComponent);
    // this.transformerService.addTransformedStream([this.senders[0].dataStream, this.senders[1].dataStream], simpleAdd);
  }
}
