import {Component} from "angular2/src/core/metadata";
import {ControlGroup} from "angular2/src/common/forms/model";
import {WeatherService} from "./weather.service";
import {WeatherItem} from "./weather-item";

@Component({
    selector: 'weather-search',
    template: `<section class="weather-search">
    <form (ngSubmit)="onSubmit(f)" #f>
        <div>
            <label for="city">City</label>
            <input ngControl="location" type="text" id="city" required>
        </div>
        <br>
        <button type="submit">Add City</button>
    </form>
    <div>
        <span class="info">
            City found: 
        </span>
    </div>
</section>`,
    providers: [WeatherService]
})

export class WeatherSearchComponent{
    constructor(private _weatherService: WeatherService){

    }

    onSubmit(form: ControlGroup){
        this._weatherService.searchWeatherData(form.value.location)
            .subscribe(
                data => {
                    const weatherItem = new WeatherItem(data.name, data.weather[0].description,
                    data.main.temp);
                    this._weatherService.addWeatherItem(weatherItem);
                }
            );
    }
}