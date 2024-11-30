import { Component, inject, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';
import { UtilsService } from 'src/app/services/utils.service';
import { AddUpdateEstudianteComponent } from 'src/app/shared/components/add-update-estudiante/add-update-estudiante.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  firebaseSvc = inject(FirebaseService);
  utilsSvc = inject(UtilsService);

  ngOnInit() {
  }


  //cerrar sesion

  singOut(){
    this.firebaseSvc.singOut();
  }


  addUpdateEstudiante() {
    this.utilsSvc.presentModal({
      component: AddUpdateEstudianteComponent,
      cssClass: 'add-update-modal'
    })
  }

}
