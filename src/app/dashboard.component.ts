import { Component, OnInit } from '@angular/core';
import { NetworkSendersService } from './senders/network-senders.service';

@Component({
  selector: 'helm-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public networkSenders;
  public label;
  public value;

  constructor(private networkService: NetworkSendersService) {}

  ngOnInit() {
    this.networkSenders = this.networkService.networkSenders;
  }
}
