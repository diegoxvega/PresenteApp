import { Component, OnInit } from '@angular/core';
import { GetapiService } from 'src/app/services/getapi.service';

@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.page.html',
  styleUrls: ['./conversor.page.scss'],
})
export class ConversorPage implements OnInit {

  pageTitle = 'Conversor';

  listadoMindicador:any=[];



  constructor(private getapiService:GetapiService) {}

  ngOnInit() {
    this.cargar();
  }

  cargar(){ 

    this.getapiService.getPosts()
    .then(respuesta => {
      this.listadoMindicador = respuesta;
      console.log(respuesta);
    },
    (err) => {
      console.log(err);
    });

  }
}