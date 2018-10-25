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

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent, routingComponents
      ],
      providers: [
        { provide: ActivatedRoute, useValue: {} },
        { provide: HttpClient, useValue: {} },
        { provide: Router, useValue: {} },
        { provide: WeatherForecastService, useClass: SpyWeatherForecastServiceService }
      ],
      imports: [RouterTestingModule, ReactiveFormsModule, MaterialModules, RouterModule]
    }).compileComponents();
  }));

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
