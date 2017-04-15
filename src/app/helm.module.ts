import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { HelmComponent } from './helm.component';
import { DashboardComponent } from './dashboard.component';
import { CombineStreamsDialogComponent } from './transformers/combine-streams.dialog.component';

import { SignalKService } from './senders/signal-k.service';
import { NetworkSendersService } from './senders/network-senders.service';
import { GaugeComponent } from './consumers/gauge.component';
import { SendersService } from './senders/senders.service';
import { TransformersService } from './transformers/transformers.service';
import { MdDialogModule } from '@angular/material';

@NgModule({
  declarations: [
    HelmComponent,
    DashboardComponent,
    GaugeComponent,
    CombineStreamsDialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MdDialogModule
  ],
  entryComponents: [
    CombineStreamsDialogComponent
  ],
  providers: [
    SignalKService,
    NetworkSendersService,
    SendersService,
    TransformersService
  ],
  bootstrap: [HelmComponent]
})
export class HelmModule { }
