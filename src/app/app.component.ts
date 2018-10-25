import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { WeatherForecastService } from './weather-forecast/weather-forecast.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  searchLocationForm: FormGroup;
  location = new FormControl('', [Validators.required]);
  weatherData: any;
  message: string;
  isDataLoding: boolean;
  constructor(private formBuilder: FormBuilder, private weatherForecastService: WeatherForecastService) {
    this.searchLocationForm = this.formBuilder.group({
      location: this.location
    });
    this.location.setValue(environment.defaultCity);
    this.search();
  }

  search() {
    const value = this.location.value;
    this.isDataLoding = true;
    this.message = undefined; this.weatherData = undefined;
    this.weatherForecastService.getCityWeatherData(value).toPromise().then((weatherData: any) => {
      if (weatherData && weatherData.main && weatherData.main.temp) {
        this.weatherForecastService.cityName.next(value);
        this.weatherData = weatherData;
      } else {
        this.message = 'Seems city not available, Please try again.';
      }
      this.isDataLoding = false;
    }, (response) => {
      this.message = response.error.message;
      this.isDataLoding = false;
    }).catch((exception: any) => {
      this.message = exception.error.message;
      this.isDataLoding = false;
    });
  }

}
