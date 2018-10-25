import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentWeatherComponent } from './current-weather.component';
import { routingComponents } from '../app.routing.module';
import { HttpClient } from '@angular/common/http';
import { WeatherForecastService } from '../weather-forecast/weather-forecast.service';
import { SpyWeatherForecastServiceService } from 'src/testing/spy-services';

describe('CurrentWeatherComponent', () => {
  let component: CurrentWeatherComponent;
  let fixture: ComponentFixture<CurrentWeatherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CurrentWeatherComponent, routingComponents],
      providers: [{ provide: HttpClient, useValue: {} }, { provide: WeatherForecastService, useClass: SpyWeatherForecastServiceService }],
      imports: []
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
