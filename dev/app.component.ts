import {Component} from 'angular2/core';
import {WeatherListComponent} from "./weather/weather-list.component";

@Component({
    selector: 'my-app',
    template: `
        <header>
            <h1>Angular 2 Weather</h1>
        </header>
        <div class="container">
            <weather-list></weather-list>
        </div>
        
    `,
    directives: [WeatherListComponent]
})

export class AppComponent {

}