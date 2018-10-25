import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeekWeatherComponent } from './week-weather.component';
import { routingComponents } from '../app.routing.module';
import { HttpClient } from '@angular/common/http';
import { WeatherForecastService } from '../weather-forecast/weather-forecast.service';
import { SpyWeatherForecastServiceService } from 'src/testing/spy-services';

describe('WeekWeatherComponent', () => {
  let component: WeekWeatherComponent;
  let fixture: ComponentFixture<WeekWeatherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WeekWeatherComponent, routingComponents],
      providers: [{ provide: HttpClient, useValue: {} }, { provide: WeatherForecastService, useClass: SpyWeatherForecastServiceService }],
      imports: []
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeekWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
