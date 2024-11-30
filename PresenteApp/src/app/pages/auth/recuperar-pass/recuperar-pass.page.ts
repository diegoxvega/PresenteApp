import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user.models';
import { FirebaseService } from 'src/app/services/firebase.service';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-recuperar-pass',
  templateUrl: './recuperar-pass.page.html',
  styleUrls: ['./recuperar-pass.page.scss'],
})
export class RecuperarPassPage implements OnInit {

  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
  })

 firebaseSvc = inject(FirebaseService);
 utilsSvc = inject(UtilsService)

  ngOnInit() {
  }

  async submit(){
   if (this.form.valid) {

      const loading = await this.utilsSvc.loading();
      await loading.present();


   this.firebaseSvc.sendRecoveryEmail(this.form.value.email ).then(res =>{

    this.utilsSvc.presentToast({
      message: 'Revise Su Correo',
      duration: 1500,
      color: 'primary',
      position: 'middle',
      icon: 'mail-outline'
        })

        this.utilsSvc.routerLink('/auth');
        this.form.reset();

   }).catch(error =>{
    console.log(error);

    this.utilsSvc.presentToast({
      message:error.message,
      duration: 2500,
      color: 'primary',
      position: 'middle',
      icon: 'alert-circle-outline'
        })

   }).finally(()=> {
      loading.dismiss();
   })
  }
  }


}

