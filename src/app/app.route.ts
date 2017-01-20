import{WeatherComponent} from "./weather/weather.component";
import {provideRouter} from "@angular/router";
const APP_ROUTES=[

{path:'',component: WeatherComponent}


];
export const APP_ROUTES_PROVIDER=[
provideRouter(APP_ROUTES)

];
