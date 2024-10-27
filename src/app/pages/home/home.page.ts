import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { OpenWeatherMapService } from 'src/app/services/apiclima.service';
import { Geolocation } from '@awesome-cordova-plugins/geolocation';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  
  pageTitle = 'Bienvenido';
  isNotHome = false;
  loading :HTMLIonLoadingElement;

  latitude: number | undefined;
  longitude: number | undefined;

  weatherTemp: any;
  cityName: any;
  countryName: any;
  weatherIcon: any;
  weatherDetails: any;

  waiting: boolean | undefined;
  didLoadWeather: boolean | undefined;

  constructor(private loadingCtrl: LoadingController, private servicioClima: OpenWeatherMapService) {}
  
  ngOnInit(): void {
    this.getLocation();
    this.cargarLoading('Bienveido a fix inaitor');
  }

   

  cargarLoading(message: string){
    this.presentLoading(message);

    setTimeout(() => {
      
      this.loading.dismiss();
    },2000);
  }

  async presentLoading(message:string){
    this.loading = await this.loadingCtrl.create({
      message,
    });
    await this.loading.present();
  }
  
  async getLocation() {
    const position = await Geolocation.getCurrentPosition();
    this.latitude = position.coords.latitude;
    this.longitude = position.coords.longitude;

    this.servicioClima.getClima(this.latitude, this.longitude).subscribe({
      next: (res) => {
        this.weatherTemp = Math.round(res['main'].temp);
        this.cityName = res['name'];
        this.countryName = res['sys'].country;
        this.weatherDetails = res['weather'][0];
        this.weatherIcon = `http://openweathermap.org/img/wn/${this.weatherDetails.icon}.png`;
        this.didLoadWeather = true;
      },
      error: (e) => console.log(e),
      complete: () => {
        this.waiting = false;
        console.info('complete')
      }
    });
  }
}
