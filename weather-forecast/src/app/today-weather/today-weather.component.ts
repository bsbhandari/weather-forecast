import { Component, OnInit } from '@angular/core';
import { WeatherForecastService } from '../weather-forecast/weather-forecast.service';

@Component({
  selector: 'app-today-weather',
  templateUrl: './today-weather.component.html',
  styleUrls: ['./today-weather.component.scss']
})
export class TodayWeatherComponent implements OnInit {

  todayData: any;
  constructor(private weatherForecastService: WeatherForecastService) {
    this.weatherForecastService.weatherData.subscribe((value) => {
      if (value)
        this.todayData = value[0];
    });
  }

  ngOnInit() {
  }
}
