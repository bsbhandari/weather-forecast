import { Component, OnInit } from '@angular/core';
import { WeatherForecastService } from '../weather-forecast/weather-forecast.service';

@Component({
  selector: 'app-week-weather',
  templateUrl: './week-weather.component.html',
  styleUrls: ['./week-weather.component.scss']
})
export class WeekWeatherComponent implements OnInit {
  weekData = [];
  constructor(private weatherForecastService: WeatherForecastService) {
    this.weatherForecastService.weatherData.subscribe((value) => {
      this.weatherForecastService.weatherData.subscribe((value) => {
        if (value)
          this.weekData = value.slice(0, 6);
      });
    });
  }

  ngOnInit() {
  }

}
