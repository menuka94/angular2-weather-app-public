import {Component} from 'angular2/core';
import {WeatherItemComponent} from "./weather-item.component";
import {WeatherItem} from "./weather-item";
import {OnInit} from "angular2/src/core/linker/interfaces";
import {WeatherService} from "./weather.service";
import {Inject} from "angular2/src/core/di/decorators";

@Component({
    selector: 'weather-list',
    template: `<section>
    <weather-item *ngFor="#weatherItemHere of weatherItems" [item]="weatherItemHere"></weather-item>
</section>`,
    directives: [WeatherItemComponent],
    providers: [WeatherService]
})

export class WeatherListComponent implements OnInit{
    weatherItems: WeatherItem[];

    constructor(private _weatherService: WeatherService){

    }

    ngOnInit():any {
        this.weatherItems = this._weatherService.getWeatherItems();
    }
}