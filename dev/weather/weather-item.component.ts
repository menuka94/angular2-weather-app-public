import {Component, Input} from 'angular2/core';
import {WeatherItem} from "./weather-item";

@Component({
    selector: `weather-item`,
    template: `<article class="weather-element">
    <div class="col-md-1">
        <h3>{{weatherItem.cityName}}</h3>
        <p class="info">{{weatherItem.description}}</p>
    </div>
    <div class="col-md-2">
        <span class="temperature">{{weatherItem.temperature}} deg C</span>
    </div>
</article>
    `,
    styleUrls: ['/src/weather-item.css'],
    inputs: ['weatherItem: item']
})

export class WeatherItemComponent{
    // @Input('item')
    weatherItem: WeatherItem;

    constructor(){
        this.weatherItem = new WeatherItem('London', 'Rainy', 32);
    }
}