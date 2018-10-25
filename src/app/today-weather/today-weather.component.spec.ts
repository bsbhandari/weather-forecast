import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodayWeatherComponent } from './today-weather.component';
import { HttpClient } from '@angular/common/http';
import { routingComponents } from '../app.routing.module';
import { WeatherForecastService } from '../weather-forecast/weather-forecast.service';
import { SpyWeatherForecastServiceService } from 'src/testing/spy-services';

describe('TodayWeatherComponent', () => {
  let component: TodayWeatherComponent;
  let fixture: ComponentFixture<TodayWeatherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TodayWeatherComponent, routingComponents],
      providers: [{ provide: HttpClient, useValue: {} }, { provide: WeatherForecastService, useClass: SpyWeatherForecastServiceService }],
      imports: []
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodayWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
