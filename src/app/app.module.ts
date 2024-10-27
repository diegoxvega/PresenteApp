import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideStorage, getStorage } from '@angular/fire/storage';
import { Capacitor } from '@capacitor/core';
import { environment } from 'src/environments/environment';
import { indexedDBLocalPersistence, initializeAuth } from '@angular/fire/auth';
import { getApp } from 'firebase/app';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule,
  provideFirebaseApp(() => initializeApp(environment.firebase)),
  provideAuth(() => {
    if(Capacitor.isNativePlatform()) {
      return initializeAuth(getApp(),{
        persistence: indexedDBLocalPersistence,
      })
    } else {
      return getAuth();
    }
  }),
  provideFirestore(() => getFirestore()),
  provideStorage(() => getStorage())
],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
