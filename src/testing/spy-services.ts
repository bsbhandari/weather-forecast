
import { of, BehaviorSubject } from 'rxjs';
export class SpyWeatherForecastServiceService {
    cityName = new BehaviorSubject<any>('');
    weatherData = new BehaviorSubject<any>('');

    getCityWeatherData = jasmine
        .createSpy('getCityWeatherData')
        .and.callFake(() => asyncData(Object.assign({})));

    getCityDailyWeather = jasmine
        .createSpy('getCityDailyWeather')
        .and.callFake(() => asyncData(Object.assign({})));
}



export function asyncData<T>(data: T) {
    return of(() => Promise.resolve(data));
}
