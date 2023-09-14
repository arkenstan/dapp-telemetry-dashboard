import { Component, Input } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { LegendPosition } from '@swimlane/ngx-charts';
import { single } from './data';


@Component({
  selector: 'app-chart',
  templateUrl: './telemetry-chart.component.html',
  styleUrls: ['./telemetry-chart.component.scss']
})
export class TelemetryChartComponent {
  
  single = single;
  view: [number, number] = [600, 400];

  // options
  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;
  legendPosition: any = LegendPosition.Right;
  
  colorScheme: any = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  private _data:any = [];
  @Input() get data() { return this._data; }
  set data(data: any) { 
    console.log("Data****", data)
    this._data = [
        {
          "name": "Used",
          "value": data.used
        }, {
          "name": "Free",
          "value": data.free
        }
      ]
      this.single[0] =this.data;
      this.single = [...this.single];
  }
  @Input() machineName:string = "";

  constructor() {
    Object.assign(this, { single });
  }
 
  onSelect(data:any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data:any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data:any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
}