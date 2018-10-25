import { Component, OnInit, Input } from '@angular/core';
import { WeatherForecastService } from '../weather-forecast/weather-forecast.service';

@Component({
  selector: 'app-day-cloud',
  templateUrl: './day-cloud.component.html',
  styleUrls: ['./day-cloud.component.scss']
})
export class DayCloudComponent {

  @Input() weatherData: any;
  weekData = [];
  constructor(private weatherForecastService: WeatherForecastService) {
    this.weatherForecastService.weatherData.subscribe((value) => {
      if (value)
        this.weekData = value.slice(0, 5);
    });
  }

  getClass(value) {
    switch (value.weather[0].id) {
      case 800:
        return 'mdi mdi-weather-sunny';
      case 500:
        return 'mdi  mdi-weather-rainy';
      case 801:
        return 'mdi mdi-weather-partlycloudy';
      case 802:
        return 'mdi mdi-weather-partlycloudy';
      case 501:
        return 'mdi mdi-weather-pouring';
      case 1:
        return 'mdi mdi-weather-snowy';
      case 1:
        return 'mdi mdi-weather-sunset"';
      default:
        return 'mdi mdi-weather-lightning';
    }
  }
}
