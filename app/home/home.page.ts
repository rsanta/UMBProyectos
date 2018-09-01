import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import * as firebase from 'Firebase';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  infos = [];
  ref = firebase.database().ref('infos/');

  proyectos = [];
  refproyectos = firebase.database().ref('proyectos/');

  constructor(private route: ActivatedRoute, public router: Router, public alertController: AlertController) {
    this.ref.on('value', resp => {
      this.infos = [];
      this.infos = snapshotToArray(resp);
    });

    this.refproyectos.on('value', resp => {
      this.proyectos = [];
      this.proyectos = snapshotToArray(resp);
    });
  }

  edit(key) {
    this.router.navigate(['/edit/'+key]);
  }

  editp(key) {
    this.router.navigate(['/editp/'+key]);
  }

  async delete(key) {
    const alert = await this.alertController.create({
      header: 'Confirm!',
      message: 'Are you sure want to delete this info?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('cancel');
          }
        }, {
          text: 'Okay',
          handler: () => {
            firebase.database().ref('infos/'+key).remove();
          }
        }
      ]
    });

    await alert.present();
  }

  async deletep(key) {
    const alert = await this.alertController.create({
      header: 'Confirm!',
      message: 'Are you sure want to delete this proyecto?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('cancel');
          }
        }, {
          text: 'Okay',
          handler: () => {
            firebase.database().ref('proyectos/'+key).remove();
          }
        }
      ]
    });

    await alert.present();
  }

  participantesp(key) {
    this.router.navigate(['/participantesp/'+key]);
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
