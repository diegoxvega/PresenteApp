import { inject, Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile, sendPasswordResetEmail } from 'firebase/auth'
import { User } from '../models/user.models';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { getFirestore, setDoc, doc, getDoc, addDoc, collection } from '@angular/fire/firestore';
import { UtilsService } from './utils.service';
import { AngularFireStorage } from '@angular/fire/compat/storage' ;
import { getStorage, uploadString, ref, getDownloadURL } from "firebase/storage"

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  auth = inject(AngularFireAuth);
  firestore = inject(AngularFirestore);
  storage = inject(AngularFireStorage);
  utilsSvc = inject(UtilsService);

  //=======auntentificaion=========

  getAuth() {
    return getAuth();

  }



  //=======acceder=========

  singIn(user: User) {
    return signInWithEmailAndPassword(getAuth(), user.email, user.password);
  }

  //cerrar sesion 
  singOut() {
    getAuth().signOut();
    localStorage.removeItem('user');
    this.utilsSvc.routerLink('/auth');
  }


  //=======crear=========

  singUp(user: User) {
    return createUserWithEmailAndPassword(getAuth(), user.email, user.password);
  }
  //=================actualzar================
  updateUser(displayName: string) {
    return updateProfile(getAuth().currentUser, { displayName })
  }

  sendRecoveryEmail(email: string) {
    return sendPasswordResetEmail(getAuth(), email)
  }



  //=====base de dato=======

  setDocument(path: string, data: any) {
    return setDoc(doc(getFirestore(), path), data);
  }
  //===========obtener un documento===========
  async getDocument(path: string) {
    return (await getDoc(doc(getFirestore(), path))).data();
  }


  //===========agregar documento===========
  addDocument(path: string, data: any) {
    return addDoc(collection(getFirestore(), path), data);
  }

  // almacenamiento

  async uploadImage(path: string, data_url: string) {
    return uploadString(ref(getStorage(),path),data_url,'data_url').then(()=>{
      return getDownloadURL(ref(getStorage(),path))
    })

  }



}
