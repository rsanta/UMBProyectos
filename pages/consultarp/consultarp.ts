import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from 'Firebase';

/**
 * Generated class for the ConsultarpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-consultarp',
  templateUrl: 'consultarp.html',
})
export class ConsultarpPage {
  proyecto = {};
  private param1 : string ;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.param1 = this.navParams.get("param1");
    firebase.database().ref('proyectos/'+this.param1).on('value', resp => {
      this.proyecto = snapshotToObject(resp);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConsultarpPage');
  }

}

export const snapshotToObject = snapshot => {
  let item = snapshot.val();
  item.key = snapshot.key;

  return item;
}
