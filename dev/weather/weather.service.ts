import {WEATHER_ITEMS} from "./weather.data";
import {Injectable} from "angular2/src/core/di/decorators";
import {Observable} from "rxjs";
import {Http} from "angular2/src/http/http";
import 'rxjs/Rx';
import {WeatherItem} from "./weather-item";

@Injectable()
export class WeatherService{
    private api_key: string = '66c52b1083b58eb1178d55e8062746cf';

    constructor(private _http: Http){

    }

    getWeatherItems(){
        return WEATHER_ITEMS;
    }

    searchWeatherData(cityName: string): Observable{
        return this._http.get('http://api.openweathermap.org/data/2.5/weather?q='
            + cityName + '&APPID=' + this.api_key + '&UNITS=metric')
            .map(response => response.json())
            .catch(error => {
                console.error(error);
                return Observable.throw(error.json());
            });
    }

    addWeatherItem(weatherItem: WeatherItem){
        WEATHER_ITEMS.push(weatherItem);
    }
}

// API Key: 66c52b1083b58eb1178d55e8062746cf