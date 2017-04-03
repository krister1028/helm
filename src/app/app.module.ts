import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard.component';

import { SignalKService } from './signal-k.service';
import { NetworkSendersService } from './network-senders.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
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
  bootstrap: [AppComponent]
})
export class AppModule { }
