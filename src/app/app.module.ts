import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {HttpGetterService} from './services/http-getter/http-getter.service';
import {NextComponent} from './next/next.component';

import {AngularFireModule} from 'angularfire2';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AngularFirestoreModule} from 'angularfire2/firestore';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireStorageModule} from 'angularfire2/storage';
import {DataBaseService} from './services/db/data-base.service';

export const firebaseConfig = {
  apiKey: 'AIzaSyAUTGxiPJbxJo-hbjnXIc2TNm_gjIKgF1I',
  authDomain: 'mf-music-founder.firebaseapp.com',
  databaseURL: 'https://mf-music-founder.firebaseio.com',
  projectId: 'mf-music-founder',
  storageBucket: 'mf-music-founder.appspot.com',
  messagingSenderId: '1023068076023'
};

@NgModule({
  declarations: [
    AppComponent,
    NextComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    AngularFireStorageModule,
  ],
  providers: [HttpGetterService, DataBaseService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
