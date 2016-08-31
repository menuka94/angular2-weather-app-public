
import {WEATHER_ITEMS} from "./weather.data";
import {Injectable} from "angular2/src/core/di/decorators";

@Injectable()
export class WeatherService{
    getWeatherItems(){
        return WEATHER_ITEMS;
    }
}