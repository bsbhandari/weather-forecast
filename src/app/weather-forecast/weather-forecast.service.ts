import { Injectable, SimpleChange } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherForecastService {

  cityName = new BehaviorSubject<any>('');
  //behaviour object so component is listing it for change.
  weatherData = new BehaviorSubject<any>(undefined);

  constructor(private httpClient: HttpClient) {
    this.cityName.subscribe((data) => {
      if (data) {
        this.getCityDailyWeather(data).toPromise().then((dailyData: any) => {
          if (dailyData && dailyData.list) {
            dailyData.list.map((x) => { x.dateValue = new Date(x.dt * 1000) })
            this.weatherData.next(dailyData.list);
          }
        }).catch((e) => {
          this.weatherData.next(undefined);
        });
      }
    });
  }

  getCityWeatherData(cityName: string) {
    return this.httpClient.get('https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=' + environment.apiKey);
  }

  getCityDailyWeather(cityName) {
    return this.httpClient.get('https://api.openweathermap.org/data/2.5/forecast/daily?units=metric&cnt=16&q=' + cityName + '&appid=' + environment.apiKey);
  }
}
