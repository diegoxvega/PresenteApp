import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, ModalController, ModalOptions, ToastController, ToastOptions } from '@ionic/angular';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

 loadingCtrl = inject(LoadingController);
toastCtrl = inject(ToastController);
modalCtrl = inject(ModalController);
router = inject(Router)





async takePicture (promptLabelHeader: string) {
 return await Camera.getPhoto({
    quality: 90,
    allowEditing: true,
    resultType: CameraResultType.DataUrl,
    source: CameraSource.Prompt,
    promptLabelHeader,
    promptLabelPhoto: 'Seleciona una imagen',
    promptLabelPicture: 'toma una foto'
  });
};



 //======loading=======

 loading() {
  return this.loadingCtrl.create({spinner: 'crescent'})
 }



//=======Toast=======

async presentToast(opts?: ToastOptions) {
  const toast = await this.toastCtrl.create(opts);
  toast.present();
}


//========enrutar a paginas disponibles=========
  routerLink(url: string){

    return this.router.navigateByUrl(url);
  }



//============sabe un locali sotoragie=======

  saveInLocalStorage(key: string, value:any) {
    return localStorage.setItem(key, JSON.stringify(value))
  }


//=============llama a los datos del local guadaje=============
  getFromLocalStorage(key:string){
    return JSON.parse(localStorage.getItem(key))
  }


  //// modal

  async presentModal(opts: ModalOptions) {
    const modal = await this.modalCtrl.create(opts);
     await modal.present();

     const {data} = await modal.onWillDismiss();
     if(data) return data
    }


    dismissModal(data?: any){
      return this.modalCtrl.dismiss(data);
    }



}


