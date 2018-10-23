import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import * as firebase from 'Firebase';


/**
 * Generated class for the ListaparticipantespPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-listaparticipantesp',
  templateUrl: 'listaparticipantesp.html',
})
export class ListaparticipantespPage {

  ref = firebase.database().ref('proyectos/');
  items = [];
  private key : string ;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.key = this.navParams.get("param1");
    firebase.database().ref('proyectos/'+this.key+'/participantes/').on('value', resp => {
      this.items = [];
      this.items = snapshotToArray(resp);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaparticipantespPage');
  }

}

export const snapshotToArray = snapshot => {
  let returnArr = [];

  snapshot.forEach(childSnapshot => {
      let item = childSnapshot.val();
      item.key = childSnapshot.key;
      returnArr.push(item);
  });

  return returnArr;
}
