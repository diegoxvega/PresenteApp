import { Component, OnInit } from '@angular/core'; 
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-restablecer',
  templateUrl: './restablecer.page.html',
  styleUrls: ['./restablecer.page.scss'],
})
export class RestablecerPage implements OnInit {
  email: string = '';

  constructor(private router: Router, private toastCtrl: ToastController) { }

  ngOnInit() { }

  async enviarCorreoRestablecimiento() {
    // Validación del correo electrónico
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (this.email && emailPattern.test(this.email)) {
      // Aquí iría la lógica para enviar el correo de restablecimiento
      const toast = await this.toastCtrl.create({
        message: 'Enlace de restablecimiento enviado. Revise su correo.',
        duration: 2000,
        color: 'success'
      });
      toast.present();
    } else {
      const toast = await this.toastCtrl.create({
        message: 'Por favor ingrese un correo válido',
        duration: 2000,
        color: 'danger'
      });
      toast.present();
    }
  }
}
