import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  username!: string;
  password!: string;
  loginService: any;


  constructor(
    private toastController: ToastController,
    private router: Router,
  ) {
  }

  ngOnInit() {
  }

  validateLogin(){
    console.log("ejecutando validacion")

    if (
      this.loginService.validateLogin(this.username, this.password)
    ) {
      this.generateMessage('Login correcto', 'success');
      let extras: NavigationExtras = {
        state: { user: this.username }
      }
      this.router.navigate(['/home'], extras);
    } else {
      this.generateMessage('Login fallido', 'danger');
    }
  }

  async generateMessage(message: string, color: string){
    const toast = await this.toastController.create({
      message: message,
      duration: 3000,
      position: 'bottom',
      color: color
    });
    await toast.present();
  }

}
