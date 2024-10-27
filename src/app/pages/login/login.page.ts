import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Key } from 'protractor';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  pageTitle = 'Iniciar sesion';
  isNotHome = true;

  //Modelo
  user : any = {
    username : '',
    password : ''
  }

  field : string = '';

  constructor(private toastCtrl: ToastController, private route: Router) { }

  ngOnInit() {
  }

  ingresar(){
    if(this.validateModel(this.user)){
      this.presentToast('Bienvenido ' + this.user.username);
      this.route.navigate(['/home'])
    }
    else{
      this.presentToast('Necesitas rellenar el campo: ' + this.field);
    }
  }

  validateModel(model: any){
    for(var[key,value] of Object.entries(model)){
      if(value == ''){
        this.field = key;
        return false;
      }
    }
    return true;
  }

  async presentToast(message: string, duration?: number){
    const toast = await this.toastCtrl.create({
      message:message,
      duration:duration?duration:2000
    });
    toast.present();
  }

}
