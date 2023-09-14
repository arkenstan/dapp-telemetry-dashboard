import { Component, OnInit } from '@angular/core';
import GUN from 'gun/gun';

interface TelemetryData {
  host: string;
  RAM: {[key:string]:string};
  CPU: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'telemetry-dashboard';

  private gunClient = GUN(['http://localhost:8765/gun']);

  private _telemetryData: Record<string, TelemetryData> = {};
  
  public get telemetryData() {
    return Object.values(this._telemetryData);
  }

  ngOnInit(): void {
    this.gunClient
      .get('telemetryData')
      .map()
      .on((data, id) => {
        console.log("*** Hello",data, id);
        let key = id;
        if (data.host) {
          key = data.host;
        }
        this._telemetryData[key] = {...data,RAM: JSON.parse(data.RAM)};
      });
  }
}
