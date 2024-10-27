import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetapiService {

  url: string = 'https://mindicador.cl/api';

  constructor(private httpClient: HttpClient) { }

  getPosts(): Promise<any> {
    return new Promise((resolve,reject) => {
      this.httpClient.get(this.url)
      .subscribe(respuesta => {
        resolve(respuesta);
      },
      (err) => {
        reject(err);
      })
    })
  }
}
