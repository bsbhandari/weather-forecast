import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthWeatherComponent } from './month-weather.component';

describe('MonthWeatherComponent', () => {
  let component: MonthWeatherComponent;
  let fixture: ComponentFixture<MonthWeatherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonthWeatherComponent ]
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
