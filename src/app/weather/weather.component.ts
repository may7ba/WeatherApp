import { Component, OnInit } from '@angular/core';
import { Http,Response } from '@angular/http';
import { HTTP_PROVIDERS } from '@angular/http';
import { SafeResourceUrl, DomSanitizationService } from '@angular/platform-browser';
@Component({
  moduleId: module.id,
  selector: 'app-weather',
  templateUrl: 'weather.component.html',
  styleUrls: ['weather.component.css'],
  providers: [HTTP_PROVIDERS]
})
export class WeatherComponent implements OnInit {
public weather;
public cityName;
public desc;
public temp;
public sunset;
public sunrise;
public icon;
public lat;
public long;
public city;
val='';
coun='';
public currentTime;
public weatherCurrent;
public cityNameCurrent;
public descCurrent;
public tempCurrent;
public sunsetCurrent;
public sunriseCurrent;
public iconCurrent;
public latCurrent;
public longCurrent;
public cityCurrent;
public currentTimeCurrent;

public map="https://www.google.com/maps/embed/v1/place?key=AIzaSyAG4P7xg7ZhKO--P5Gh6W9PXbvFU-6dElk&q="+this.val;
url: SafeResourceUrl;
urlLocal: SafeResourceUrl;
  constructor(private http: Http, private sanitizer: DomSanitizationService) {

  }

  ngOnInit() {
  this.getWeather('london','uk');
  this.getMap('London');
  this.getCurrent();
  }
  getWeather(val,coun){
this.http.get('http://api.wunderground.com/api/b777d9d593ab95b4/conditions/q/'+coun+'/'+val+'.json')
.map((res:Response)=>res.json())
.subscribe(
data=>{
this.weather = data,
this.cityName=data.current_observation.display_location.full,
this.city=data.current_observation.display_location.city,
this.temp=data.current_observation.temperature_string,
this.desc=data.current_observation.weather,
this.icon=data.current_observation.icon_url,
this.currentTime=data.current_observation.local_time_rfc822,
this.lat=data.current_observation.observation_location.latitude,
this.long=data.current_observation.observation_location.longitude
},
err=> console.error(err),
()=>console.log('done')

);
}
getMap(val)
{
this.url = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.google.com/maps/embed/v1/place?key=AIzaSyAG4P7xg7ZhKO--P5Gh6W9PXbvFU-6dElk&q='+val);
}
getCurrent()
{
this.http.get('http://api.wunderground.com/api/b777d9d593ab95b4/conditions/q/autoip.json')
.map((res:Response)=>res.json())
.subscribe(
data=>{
this.weather = data,
this.cityNameCurrent=data.current_observation.display_location.full,
this.cityCurrent=data.current_observation.display_location.city,
this.tempCurrent=data.current_observation.temperature_string,
this.descCurrent=data.current_observation.weather,
this.iconCurrent=data.current_observation.icon_url,
this.currentTimeCurrent=data.current_observation.local_time_rfc822,
this.latCurrent=data.current_observation.observation_location.latitude,
this.longCurrent=data.current_observation.observation_location.longitude,
this.urlLocal = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.google.com/maps/embed/v1/place?key=AIzaSyAG4P7xg7ZhKO--P5Gh6W9PXbvFU-6dElk&q='+this.cityCurrent);

},
err=> console.error(err),
()=>console.log('done')

);

}
}
