import { Component, OnInit } from '@angular/core';
import { IBaseSender } from './senders/base-sender.interface';
import { SendersService } from './senders/senders.service';

@Component({
  selector: 'helm-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  public senders: IBaseSender[] = [];
  public label;
  public value;

  constructor(private sendersService: SendersService) {}

  ngOnInit() {
    this.sendersService.senderStream.subscribe(next => this.senders.push(next));
  }
}
