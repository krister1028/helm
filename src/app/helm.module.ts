import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { HelmComponent } from './helm.component';
import { DashboardComponent } from './dashboard.component';

import { SignalKService } from './senders/signal-k.service';
import { NetworkSendersService } from './senders/network-senders.service';
import { GaugeComponent } from './consumers/gauge.component';

@NgModule({
  declarations: [
    HelmComponent,
    DashboardComponent,
    GaugeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    SignalKService,
    NetworkSendersService
  ],
  bootstrap: [HelmComponent]
})
export class HelmModule { }
