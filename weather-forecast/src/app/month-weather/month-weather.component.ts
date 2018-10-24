import { Component, OnInit } from '@angular/core';
import { WeatherForecastService } from '../weather-forecast/weather-forecast.service';

@Component({
  selector: 'app-month-weather',
  templateUrl: './month-weather.component.html',
  styleUrls: ['./month-weather.component.scss']
})
export class MonthWeatherComponent implements OnInit {

  monthData: [];
  constructor(private weatherForecastService: WeatherForecastService) {
    this.weatherForecastService.weatherData.subscribe((value) => {
      if (value)
        this.monthData = value;
    });
  }

  ngOnInit() {
  }

  setTodayWeatherData(value) {

  }
}
