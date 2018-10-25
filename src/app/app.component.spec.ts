import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { routingComponents } from './app.routing.module';
import { MaterialModules } from './app.module';
import { HttpClient } from 'selenium-webdriver/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import { WeatherForecastService } from './weather-forecast/weather-forecast.service';
import { SpyWeatherForecastServiceService } from 'src/testing/spy-services';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let spyWeatherForecastServiceService: SpyWeatherForecastServiceService;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent, routingComponents
      ],
      providers: [
        { provide: WeatherForecastService, useClass: SpyWeatherForecastServiceService }
      ],
      imports: [RouterTestingModule, ReactiveFormsModule, MaterialModules, RouterModule, BrowserAnimationsModule]
    }).compileComponents();
  }));

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    spyWeatherForecastServiceService = TestBed.get(WeatherForecastService);
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should call search when search text is blank but return error', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    expect(spyWeatherForecastServiceService.getCityWeatherData).toHaveBeenCalled();
  }));

  it('should call default search when search is not empty', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    component.location.setValue('Hyderabad');
    fixture.detectChanges();
    expect(spyWeatherForecastServiceService.getCityWeatherData).toHaveBeenCalled();
  }));
});
