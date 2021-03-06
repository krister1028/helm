import { Component, OnInit, Input } from '@angular/core';
import { NetworkSender } from '../senders/network-sender';

@Component({
  selector: 'helm-gauge',
  template: '<p>{{ path }}: {{ value }}</p>',
})
export class GaugeComponent implements OnInit {

  @Input()
  sender: NetworkSender;

  public value: number;
  public path: string;

  constructor() { }

  ngOnInit() {
    this.sender.dataStream.subscribe(update => {
      this.value = update.value;
      this.path = update.path;
    });
  }

}
