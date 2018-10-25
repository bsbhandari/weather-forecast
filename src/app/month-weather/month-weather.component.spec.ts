import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthWeatherComponent } from './month-weather.component';
import { routingComponents } from '../app.routing.module';
import { HttpClient } from '@angular/common/http';

describe('MonthWeatherComponent', () => {
  let component: MonthWeatherComponent;
  let fixture: ComponentFixture<MonthWeatherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MonthWeatherComponent, routingComponents],
      providers: [{ provide: HttpClient, useValue: {} },],
      imports: []
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
