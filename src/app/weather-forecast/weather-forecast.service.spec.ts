import { TestBed, inject } from '@angular/core/testing';

import { WeatherForecastService } from './weather-forecast.service';
import { HttpClient } from 'selenium-webdriver/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('WeatherForecastService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WeatherForecastService,
        { provide: HttpClient, useValue: {} }
      ],
      imports: [HttpClientTestingModule]
    });
  });

  it('should be created', inject([WeatherForecastService], (service: WeatherForecastService) => {
    expect(service).toBeTruthy();
  }));
});
