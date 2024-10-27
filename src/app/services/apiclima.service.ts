import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const apiOWM = environment.Apiclima;
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?';

@Injectable({
  providedIn: 'root'
})
export class OpenWeatherMapService {

  constructor(private httpClient : HttpClient) { }

  getClima(lat: number, lon: number): Observable<any>{
    return this.httpClient.get(
      `${apiUrl}lat=${lat}&lon=${lon}&units=metric&lang=es&appid=${apiOWM}`
    );
  }
  
}
