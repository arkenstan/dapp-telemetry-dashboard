import { Component, OnInit } from '@angular/core';
import { IGunInstance } from 'gun';
import GUN from 'gun/gun';

interface TelemetryData {
  host: string;
  RAM: string;
  CPU: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'telemetry-dashboard';

  private gunClient = GUN(['http://localhost:3030/gun']);

  private _telemetryData: Record<string, TelemetryData> = {};

  public get telemetryData() {
    return Object.values(this._telemetryData);
  }

  ngOnInit(): void {
    this.gunClient
      .get('telemetryData')
      .map()
      .on((data, id) => {
        console.log(data, id);

        let key = id;

        if (data.host) {
          key = data.host;
        }

        this._telemetryData[key] = data;
      });
  }
}
