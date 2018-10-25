import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss']
})
export class CurrentWeatherComponent implements OnInit {

  todayDate: Date;
  temperature: string;
  cityName: string;
  @Input() weatherData: any;
  constructor() {
    this.todayDate = new Date();
  }

  ngOnInit() {
  }

  getTempratureInCelcius(temp) {
    const celsiusTemp = (temp - 273.15);
    return Math.ceil(celsiusTemp);
  }
}
