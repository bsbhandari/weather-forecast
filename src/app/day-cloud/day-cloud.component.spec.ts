import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DayCloudComponent } from './day-cloud.component';
import { routingComponents } from '../app.routing.module';
import { HttpClient } from '@angular/common/http';
import { WeatherForecastService } from '../weather-forecast/weather-forecast.service';
import { SpyWeatherForecastServiceService } from 'src/testing/spy-services';

describe('DayCloudComponent', () => {
  let component: DayCloudComponent;
  let fixture: ComponentFixture<DayCloudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DayCloudComponent, routingComponents],
      providers: [{ provide: HttpClient, useValue: {} }, { provide: WeatherForecastService, useClass: SpyWeatherForecastServiceService }],
      imports: []
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DayCloudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
