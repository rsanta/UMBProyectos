import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { bdconfig } from './bdconfig';

import * as firebase from 'firebase';

// var config = {
//   apiKey: "AIzaSyDX6VO8JW3bcaWhkmXTVeR5BcCZsaXHHZc",
//   authDomain: "umbproyectos01.firebaseapp.com",
//   databaseURL: "https://umbproyectos01.firebaseio.com",
//   projectId: "umbproyectos01",
//   storageBucket: "umbproyectos01.appspot.com",
//   messagingSenderId: "540968578477"
// };

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    firebase.initializeApp(bdconfig.config);
  }
}
