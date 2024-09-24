import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restablecer',
  templateUrl: './restablecer.page.html',
  styleUrls: ['./restablecer.page.scss'],
})
export class RestablecerPage {
  newPassword: string = '';
  confirmPassword: string = '';

  constructor(
    private toastController: ToastController,
    private router: Router
  ) {}

  async resetPassword() {
    // Verificar si las contraseñas coinciden
    if (this.newPassword !== this.confirmPassword) {
      this.showToast('Las contraseñas no coinciden', 'danger');
      return;
    }

    // Aquí iría la lógica para actualizar la contraseña en tu servicio
    // Puedes simular una llamada a una API o conectarla con tu backend
    if (this.newPassword.length >= 6) {
      // Simular actualización de contraseña exitosa
      this.showToast('Contraseña actualizada exitosamente', 'success');
      this.router.navigate(['/login']); // Redirigir a la página de login después de cambiar la contraseña
    } else {
      this.showToast('La contraseña debe tener al menos 6 caracteres', 'danger');
    }
  }

  // Método para mostrar mensajes con Toast
  async showToast(message: string, color: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000,
      color,
    });
    toast.present();
  }
}
