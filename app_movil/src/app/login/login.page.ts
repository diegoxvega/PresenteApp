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

  constructor(
    private toastController: ToastController,
    private router: Router,
  ) {}

  ngOnInit() {}

  validateLogin() {
    console.log("Ejecutando validación");

    // Validar que el usuario sea 'admin' y la contraseña '12345'
    if (this.username === 'admin' && this.password === '12345') {
      this.generateMessage('Login correcto', 'success');

      // Navegación con NavigationExtras para pasar el nombre de usuario
      let extras: NavigationExtras = {
        state: { user: this.username }
      };
      this.router.navigate(['/home'], extras);  // Redirigir a la página de inicio
    } else {
      // Si el login falla, mostrar mensaje de error
      this.generateMessage('Login fallido, credenciales incorrectas', 'danger');
    }
  }

  async generateMessage(message: string, color: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 3000,
      position: 'bottom',
      color: color
    });
    await toast.present();
  }
}
