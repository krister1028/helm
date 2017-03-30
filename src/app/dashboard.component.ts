import { Component, OnInit } from '@angular/core';
import {SignalKService} from './signal-k.service';

@Component({
  selector: 'helm-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public data;
  public channels: Set<string>;


  constructor(private signalKService: SignalKService) {}

  ngOnInit() {
    this.signalKService.data.subscribe(
      x => this.data = x.data
    );
    this.channels = this.signalKService.nodes;
  }

}
