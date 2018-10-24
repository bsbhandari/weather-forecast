import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { TodayWeatherComponent } from './today-weather/today-weather.component';
import { WeekWeatherComponent } from './week-weather/week-weather.component';
import { MonthWeatherComponent } from './month-weather/month-weather.component';
import { CurrentWeatherComponent } from './current-weather/current-weather.component';
import { DayCloudComponent } from './day-cloud/day-cloud.component';

export const routingComponents = [
    TodayWeatherComponent,
    WeekWeatherComponent,
    MonthWeatherComponent,
    CurrentWeatherComponent,
    DayCloudComponent
];

const routes: Routes = [
    { path: '', redirectTo: 'today', pathMatch: 'full' },
    { path: 'today', component: TodayWeatherComponent },
    { path: 'week', component: WeekWeatherComponent },
    { path: 'month', component: MonthWeatherComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }