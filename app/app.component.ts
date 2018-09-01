import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import * as firebase from 'firebase';

var config = {
  apiKey: "AIzaSyDX6VO8JW3bcaWhkmXTVeR5BcCZsaXHHZc",
  authDomain: "umbproyectos01.firebaseapp.com",
  databaseURL: "https://umbproyectos01.firebaseio.com",
  projectId: "umbproyectos01",
  storageBucket: "umbproyectos01.appspot.com",
};
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
    firebase.initializeApp(config);
  }
}
