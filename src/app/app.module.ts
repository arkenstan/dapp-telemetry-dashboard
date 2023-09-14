import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { TelemetryChartComponent } from './telemetry-chart.component';



@NgModule({
  declarations: [
    AppComponent,
    TelemetryChartComponent
  ],
  imports:      [ 
    BrowserModule, 
    FormsModule,
    NgxChartsModule,
    BrowserAnimationsModule 
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
